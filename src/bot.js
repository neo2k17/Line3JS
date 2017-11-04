const LineConnect = require('./connect');
let LINE = require('./main.js');

const auth = {
	authToken: 'Em2yFAth6OYgYEhrhIW6.XSH6Ev2a5o1vcUPeE1FPrG.07UlMs78Ht28z6FZVWJD7qrh4q0lmQSGGCBmp5HGE8Y=',
	certificate: '9fe70defb9b34da2adf8b45a5d4f0de126619dd1874a02efe3289fa894020a8e',
}
let client =  new LineConnect(auth);
//let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});
