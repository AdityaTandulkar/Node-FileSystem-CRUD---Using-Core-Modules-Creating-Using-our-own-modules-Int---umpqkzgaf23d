const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName,fileContent,(err)=>{
		if(err) console.log(err);
	});
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	const data = await fs.readFile(fileName, "utf8", (err, data)=>{
		if(data) console.log(data);
		else console.log(err);
	})
	console.log(data);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName, fileContent, (err)=>{
		if(err) console.log(err);
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.unlink(fileName, (err)=>{
		if(err) console.log(err);
	})
}


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
