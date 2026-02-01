const fs = require('fs')


// Synchronously write data to a file and create the file if it doesn't exist and overwrite it if it does 
// fs.writeFileSync('./text.txt', 'Hello, File System! Synchronous!')

// Asynchronously write data to a file and create the file if it doesn't exist and overwrite it if it does
// fs.writeFile('./text.txt', 'Hello, File System! Asynchronous!', (err) => {if (err) throw err;})

// Synchronously read data from a file
// const data = fs.readFileSync('./contact.txt', 'utf-8')
// console.log(data) 

// Asynchronously read data from a file
// fs.readFile('./contact.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('Error', err.message)
//     } else {
//         console.log(data)
//     }
// })

// Synchronously append data to a file
// fs.appendFileSync('./text.txt', "\nAppened Synchronously!")


// Asynchronously append data to a file
// fs.appendFile('./text.txt', '\nAppended Asynchronously!', (err) => {
//     if (err) {
//         console.log('Error', err.message)
//     } else {
//         console.log('Data appended successfully!')
//     }
// })

// Synchronously copy a file
// fs.cpSync('./text.txt', './copy.txt')

// Asynchronously copy a file
// fs.cp('./text.txt', './copy_async.txt', (err) => {
//     if (err) {
//         console.log('Error', err.message)
//     } else {
//         console.log('File copied successfully! Asynchronously')
//     }
// })

// Synchronously delete a file
// fs.unlinkSync('./copy.txt')

// Asynchronously delete a file
// fs.unlink('./copy_async.txt', (err) => {
//     if (err) {
//         console.log('Error', err.message)
//     } else {
//         console.log('File deleted successfully! Asynchronously')
//     }
// })

// Synchronously rename a file
// fs.renameSync('./text.txt', './test.txt')

// Asynchronously rename a file
// fs.rename('./test.txt', './text.txt', (err) => {
//     if (err) {
//         console.log('Error', err.message)
//     } else {
//         console.log('File renamed successfully! Asynchronously')
//     }
// })

// fs.mkdirSync('./new_folder/sub_folder', { recursive: true })
// { recursive: true } option allows creating nested directories

// fs.rmSync('./new_folder', { recursive: true, force: true })
// force: true - ignores errors if the directory does not exist

// File read/write
// 1. writeFileSync
// 2. readFileSync
// 3. appendFileSync
// 4. copyFileSync
// 5. truncateSync

// File & directory management
// 6. unlinkSync
// 7. renameSync
// 8. mkdirSync
// 9. rmdirSync (deprecated → use rmSync)
// 10. rmSync - removes files and directories
// 11. readdirSync

// File stats & metadata
// 12. statSync
// 13. lstatSync
// 14. fstatSync
// 15. existsSync

// Permissions & ownership
// 16. chmodSync
// 17. chownSync
// 18. lchmodSync (not supported on all platforms)
// 19. lchownSync

// Timestamps
// 20. utimesSync

// Links
// 21. symlinkSync
// 22. linkSync
// 23. readlinkSync
// 24. realpathSync

// File descriptors
// 25. openSync
// 26. closeSync
// 27. readSync
// 28. writeSync
// 29. fsyncSync
// 30. fdatasyncSync
// 31. fchmodSync
// 32. fchownSync
// 33. ftruncateSync

// Directories
// 34. opendirSync
// 35. mkdtempSync

// Watching
// 36. watchFile
// 37. unwatchFile

// File read/write
// 1. writeFile
// 2. readFile
// 3. appendFile
// 4. copyFile
// 5. truncate

// File & directory management
// 6. unlink
// 7. rename
// 8. mkdir
// 9. rmdir (deprecated)
// 10. rm
// 11. readdir

// File stats & metadata
// 12. stat
// 13. lstat
// 14. fstat
// 15. exists (deprecated)

// Permissions & ownership
// 16. chmod
// 17. chown
// 18. lchmod
// 19. lchown

// Timestamps
// 20. utimes

// Links
// 21. symlink
// 22. link
// 23. readlink
// 24. realpath

// File descriptors
// 25. open
// 26. close
// 27. read
// 28. write
// 29. fsync
// 30. fdatasync
// 31. fchmod
// 32. fchown
// 33. ftruncate

// Directories
// 34. opendir
// 35. mkdtemp

// Watching
// 36. watchFile
// 37. unwatchFile
// 38. watch

// Streams (async by nature)
// 39. createReadStream
// 40. createWriteStream

// Modern best practice (VERY IMPORTANT)
// Instead of callbacks 👇
// Use Promises API:
// const fs = require('fs/promises')

// Examples:
// fs.readFile()
// fs.writeFile()
// fs.copyFile()
// fs.rm()
// fs.mkdir()
// There are NO Sync methods in fs/promises.