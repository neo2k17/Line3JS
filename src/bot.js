const LineConnect = require('./connect');
let LINE = require('./main.js');
console.info("\n\
=========================================\n\
BotName: LINE Etot JS\n\
Version: 0.2.1\n\
Terima Kasih Kepada @Alfathdirk @TCR_TEAM\n\
=========================================\n\
\nNOTE : Ini Adalah AlphatJS Lama Buatan @Alfathdirk @TCR_TEAM Dan Ini Telah Dikembangin Oleh @TAB_TEAM\nTolong Untuk Tidak Perjual-Belikan Script Ini!\n\
****Nekopoi.host Running****");

const auth = {
	authToken: 'EmnAJjvLzLfEIxQkCvnb.5QT9zEniAkpIZc1LxU3YwW.0Pv2nbBsi0qguWRNmOTqrYYZJ4XLkeMKH070Gd7fa/o=',
	certificate: 'a82e8634329485d3fdf0166b9741b6f68aa02073387211c9c70914778ba20c3a',
}
let client =  new LineConnect(auth);
// let client =  new LineConnect();

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
