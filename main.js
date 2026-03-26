document.addEventListener('alpine:init', () => {
            Alpine.store('rataRata' , {
                hasilAoFive: '', hasilMoThree: '',
                rataRataAofive(a,b,c,d,e){
                    let waktu = [parseFloat(a), parseFloat(b), parseFloat(c), parseFloat(d), parseFloat(e)];
                    //Mengurutan dari waktu terbesar sampai terkecil
                    for (let i = 0; i < waktu.length; i++){
                        for(let j = i + 1; j < waktu.length; j++){
                            if (waktu[i] < waktu[j]){
                            //g=ganti
                            let g = waktu[i];
                            waktu[i] = waktu[j];
                            waktu[j] = g;
                           }
                        }
                    }
                    //menambah 3 waktu tengah lalu dibagikan 
                    this.hasilAoFive = (waktu[1] + waktu[2] + waktu[3]) / 3;
                },
		//menambahkan ke-3 waktu lalu dibagi 3
                rataRataMothree(a,b,c){ this.hasilMoThree = (parseFloat(a) + parseFloat(b) + parseFloat(c)) / 3; },
            }),
            Alpine.store('modeGelap', { on: false, toggle() {this.on = !this.on} 
	})
    })
