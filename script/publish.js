const R = require('ramda')
const { BosClient } = require('@baiducloud/sdk')
const path = require('path')
const recursive = require("recursive-readdir");
const config  = require('./config')

const bucket = 'nftcastle'
const client = new BosClient(config)
const getLocalBundles = async () =>{
   const files = await recursive("../build")
   return files
}

const getRemoteBundles = async () =>{
    const bundles = await client.listObjects(bucket)
        .then(function (response) {
            return R.compose(
                R.map(R.prop('key')),
                R.path(['body', 'contents'])
            )(response)
        })
        .catch(console.error)
    return bundles
}
const delRemoteFile =  file => client.deleteObject(bucket, file)


const main = async () =>{
    const remoteNames = await getRemoteBundles()
    console.log(`有 ${remoteNames.length} 个远程文件待删除`)
    for (const remoteFile of remoteNames) {
        await delRemoteFile(remoteFile)
        .then(()=>{
            console.log(`删除 ${remoteFile} 成功`)
        })
        .catch(()=>{
            console.error(`删除 ${remoteFile} 失败`)
        })
    }

    
    const localNames = await getLocalBundles()

    console.log(`有 ${localNames.length} 个文件待上传`)
    let count = 0
    for (const localFile of localNames) {
        const name = localFile.replace("..\\build\\", '')
        .replace(/\\/g, '/')
        await client.putObjectFromFile(
            bucket, 
            name, 
            path.resolve(__dirname, localFile)
        )
        .then(()=>{
            count ++;
            console.log(`上传 ${name} 成功`)
        })
        .catch(()=>{
            console.error(`上传 ${name} 失败`)
        })
    }

    console.log(`有 ${count} 个文件上传完成`)
}

main()





