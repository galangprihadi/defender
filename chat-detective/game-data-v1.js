const gameData = {
    homePage: "../index.html",
    types: ["Aman", "Phishing", "Scam"],
    numOfQuestion: 10,
    
    question: [
        {  /*Left it blank*/  },

        {   // Quest 1
            id: 1,
            type: 1,

            intro: `Klien Anda adalah seorang member dari layanan streaming video bernama Nextflip. 
            Suatu hari klien Anda menerima pesan dari seseorang yang mengaku customer service Nextflip.`,

            image: "../images/working.png",
            sender: "Nextflip Team Support",

            chat: [
                `X: Pelanggan yang terhormat, karena adanya kebijakan perubahan tarif layanan, maka 
                per tanggal 1 bulan depan, biaya berlangganan akan naik sebesar 5% untuk semua paket 
                berlangganan.`,
                `X: Durasi berlangganan bersifat akumulatif dan secara otomatis akan ditambahkan ke 
                durasi berlangganan Anda.`,
                `X: Jika Anda melakukan perpanjangan durasi berlangganan di bulan ini, maka Anda 
                berhak menikmati tarif lama sebelum kenaikan.`,
                `X: Silakan lakukan perpanjangan melalui sistem layanan Nextflip.`,
                `X: Waspadai segala bentuk penipuan yang mengatasnakaman pihak Nextflip.`,
                `X: Terima kasih.<br>Nextflip Team Support`,
            ],

            nCorrect: 2,
            choices : [
                [
                    `Isi pesan hanya memberikan informasi umum.`,
                    `Proses perpanjangan dilakukan melalui aplikasi resmi Netflip.`,
                    `Menggunakan bahasa sopan dan resmi.`,
                    `Informasi disampaikan dengan tepat dan tidak bertele-tele.`,
                    `Identitas pengirim disampaikan dengan jelas di awal dan di akhir pesan.`,
                ],
                
                [
                    `Menghubungi klien Anda secara langsung melalui chat.`,
                    `Ada kenaikan biaya berlangganan yang tidak masuk akal.`,
                    `Mengarahkan pelanggan untuk menggunakan layanan Nextflip.`,
                    `Mengaku sebagai team support untuk mengecoh klien Anda.`,
                    `Ada anjuran untuk melakukan perpanjangan durasi berlangganan.`,
                ],
                
                [
                    `Menyampaikan adanya kenaikan biaya berlangganan.`,
                    `Mendorong klien Anda untuk melakukan perpanjangan durasi berlangganan.`,
                    `Menggunakan kata-kata yang sopan tapi terkesan memaksa.`,
                    `Identitas pengirim disampaikan dengan jelas di akhir chat.`,
                    `Tersirat kesan bahwa pengirim telah mengenal klien Anda secara dekat.`,
                ],
            ]
        },

        {   // Quest 2
            id: 2,
            type: 1,

            intro: `Klien Anda adalah seorang mahasiswa berprestasi yang aktif dalam beberapa kegiatan 
            akademik dan kelembagaan. Suatu hari, seseorang yang mengaku Sekretaris Wakil Rektor 
            Bidang Akademik menghubunginya melalui chat.`,

            image: "../images/working.png",
            sender: "+62 123-4455-6677",

            chat: [
                `x: Assalamualaikum, Wr. Wb.`,
                `x: Perkenalkan, saya Sakura, sekretarisnya Prof. Kakashi, Wakil Rektor Bidang Akademik.`,
                `x: Apakah benar ini Mbak Ino, mahasiswa Prodi Informatika angkatan 2025?`,
                `y: Waalaikumsalam,`,
                `y: Benar Bu Sakura, saya Ino. Ada yang bisa dibantu Bu?`,
                `x: Gini Mbak Ino, besok lusa kita akan kedatangan kunjungan dari Ibaraki University, 
                Jepang. Terkait hal tersebut, Prof. Kakashi mengusulkan ada beberapa mahasiswa yang 
                mempresentasikan risetnya. Nah, Mbak Ino salah satu yang terpilih untuk presentasi. Mbak 
                Ino diminta mempresentasikan riset yang kemarin dilombakan dan menang di tingkat nasional
                itu Mbak.`,
                `y: Ohhh Siap Bu, Insya Allah saya bisa.`,
                `x: Terima kasih Mbak Ino. Kalau gitu nanti sore bisa temui saya di Ruang sekretaris wakil 
                rektor ya Mbak. Nanti saya jelaskan detailya.`,
                `y: Siap Bu, terima kasih kembali.`
            ],

            nCorrect: 2,
            choices : [
                [
                    `Pengirim tidak meminta data identitas yang bersifat sensitif dan rahasia.`,
                    `Proses penjelasan lebih lanjut dilakukan secara langsung (tatap muka).`,
                    `Pengirim menggunakan bahasa sopan dan resmi.`,
                    `Informasi disampaikan dengan tepat dan tidak bertele-tele.`,
                    `Pengirim memperkenalkan diri di awal percakapan.`,
                ],
                
                [
                    `Pengirim memastikan identitas klien Anda di awal percakapan.`,
                    `Pengirim menawarkan kesempatan yang menggiurkan.`,
                    `Pengirim mengatasnamakan diri sebagai sekretaris wakil rektor.`,
                    `Informasi disampaikan dengan bahasa yang terkesan formal.`,
                    `Ada permintaan untuk datang dan bertemua secara langsung (tatap muka).`,
                ],
                
                [
                    `Ada kesan untuk memaksa klien Anda mengikuti sesi presentasi yang ditawarkan.`,
                    `Pengirim mengatasnamakan diri sebagai sekretaris wakil rektor.`,
                    `Menggunakan kata-kata yang sopan tapi terkesan memaksa.`,
                    `Ada kesan urgensi dengan menyebutkan bahwa presentasi akan dilakukan besok lusa.`,
                    `Klien Anda tidak cukup layak mendapatkan kesempatan presentasi di acara tersebut.`,
                ],
            ]
        },

        {   // Quest 3
            id: 3,
            type: 2,

            intro: `Klien Anda menjadi seorang member di suatu marketplace bernama Amajon. Suatu hari 
            klien Anda menerima pesan dari seseorang yang mengaku customer service Amajon.`,

            image: "../images/working.png",
            sender: "Amajon Team Support",

            chat: [
                `x: Pelanggan yang terhormat, untuk mengapresiasi Anda sebagai pelanggan setia Amajon, 
                maka kami akan menawarkan kupon belanja senilai Rp. 500.000,- secara cuma-cuma.`,
                `x: Anda dapat menggunakan kupon tersebut untuk berbelanja berbagai macam produk di Amajon.`,
                `x: Untuk menerima penawaran ini, Anda harus melakukan klaim atas kode kupon 
                melalui tautan berikut:`,
                `x: https://amajohn.com/klaim-kupon`,
                `x: Kode kupon Anda adalah: 270520<br>Kode kupon hanya dapat digunakan sekali. Jangan 
                sebarkan kode kupon tersebut!`,
                `x: Penawaran ini diberikan khusus kepada Anda dan hanya berlaku untuk hari ini.`,
                `x: Waspadai segala bentuk penipuan yang mengatasnakaman pihak Amajon.`,
                `x: Terima kasih telah menjadi pelanggan setia Amajon.<br><br>Amajon Team Support`,
            ],

            nCorrect: 2,
            choices : [
                [
                    `Pesan tersebut hanya dimaksudkan untuk memberikan informasi kepada pelanggan.`,
                    `Jumlah nominal kupon belanja yang ditawarkan masuk akal.`,
                    `Proses konfirmasi dilakukan melalui website resmi Amajon.`,
                    `Bahasa yang digunakan sopan dan resmi.`,
                    `Pengirim mengingatkan klien Anda untuk waspada dan hati-hati terhadap penipuan.`,
                ],
                
                [
                    `Ada upaya penekanan dengan memberikan batasan waktu penawaran yang pendek.`,
                    `Alamat website terindikasi palsu karena bukan "amajon.com".`,
                    `Nominal kupon belanja yang ditawarkan tidak masuk akal.`,
                    `Proses klaim dilakukan dengan kode kupon yang mencurigakan.`,
                    `Penawaran ini hanya diberikan untuk klien Anda sebagai pelanggan setia.`,
                ],
                
                [
                    `Ada upaya memaksa klien Anda untuk menerima tawaran yang diberikan.`,
                    `Alamat website terindikasi palsu karena mengarah ke halaman tertentu.`,
                    `Pengirim secara tidak langsung meminta klien Anda membayar sejumlah uang.`,
                    `Ada upaya memberikan tekanan melalui batasan waktu penawaran yang pendek.`,
                    `Tersirat kesan bahwa pengirim telah mengenal klien Anda secara dekat.`,
                ],
            ]
        },

        {   // Quest 4
            id: 4,
            type: 2,

            intro: `Klien Anda baru saja mengikut chat group komunitas traveling yang ia temukan 
            di media sosial. Tidak lama kemudian, seseorang yang mengaku admin menghubunginya.`,

            image: "../images/working.png",
            sender: "+62 123-1234-4321",

            chat: [
                `x: Halo kak, selamat datang di komunitas traveling "Jalan Terus". Perkenalan namaku 
                Lilie, selaku admin komunitas ini.`,
                `x: Untuk proses verifikasi member baru, kami perlu informasi identitas umum dan 
                kontak kerabat dekat.`,
                `y: Halo kak, salam kenal.`,
                `y: Informasi apa aja yang dibutuhin kak?`,
                `x: Untuk informasi identitas umum, cukup foto KTP dan passport (jika sudah punya 
                passport). Informasi ini nanti dipakai kalau kakak mau book tiket biar prosesnya cepet. 
                Soalnya tiket murah biasanya jadi rebutan dan cepet sekali sold.`,
                `x: Kalau informasi kontak kerabat dekat sebenernya untuk keamanan kakak sendiri. Kalau 
                misalnya selama perjalanan terjadi sesuatu sama kakak, setidaknya kamu punya data 
                kontak yang bisa dihubungi dalam kondisi emergency.`,
                `x: Kontak kerabat bisa orang tua, kakak, adik, saudara, atau pasangan kakak`,
                `y: Oke, terus datanya dikirim ke mana?`,
                `x: Dikirim lewat chat aja gpp kak, nanti saya yang bantu proses verifikasinya.`,
            ],
            
            nCorrect: 2,
            choices : [
                [
                    `Pengirim hanya meminta informasi KTP dan passport.`,
                    `Pengirim hanya meminta informasi kontak kerabat.`,
                    `Layanan admin dalam konteks proses verifikasi adalah hal yang wajar.`,
                    `Pengirim menggunakan bahasa yang santai tapi informatif.`,
                    `Pengirim menjaga etika dengan memperkenalkan diri terlebih dahulu.`,
                ],
                
                [
                    `Pengirim meminta foto KTP dan passport melalui chat tidak resmi.`,
                    `Pengirim meminta kontak kerabat dekat melalui chat tidak resmi.`,
                    `Proses verifikasi untuk komunitas adalah sesuatu yang tidak wajar.`,
                    `Pengirim menjelaskan secara detail tujuan dari proses verifikasi.`,
                    `Pengirim menawarkan tiket murah dan mencurigakan kepada klien Anda.`,
                ],
                
                [
                    `Menggunakan bahasa informal yang memberikan kesan santai dan dekat.`,
                    `Meminta foto KTP dan passport untuk proses verifikasi.`,
                    `Meminta kontak orang tua, kakak, adik, saudara, atau pasangan.`,
                    `Menggunaka alasan keselamatan untuk mengecoh klien Anda.`,
                    `Menawarkan bantuan untuk proses verifikasi.`,
                ],
            ]
        },

        {   // Quest 5
            id: 5,
            type: 2,

            intro: `Klien Anda cukup aktif bertransaksi pada sebuah marketplace bernama Shipii.
            Suatu ketika, dia dihubungi oleh seseorang yang mengaku admin Shipii.`,

            image: "../images/working.png",
            sender: "+62 123-1234-4321",

            chat: [
                `x: Halo kak, kami dari `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
            ],
            
            nCorrect: 2,
            choices : [
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
                
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
                
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
            ]
        },

        {   // Quest 6
            id: 6,
            type: 2,

            intro: ``,

            image: "../images/working.png",
            sender: "+62 123-1234-4321",

            chat: [
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
            ],
            
            nCorrect: 2,
            choices : [
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
                
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
                
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
            ]
        },

        {   // Quest 7
            id: 7,
            type: 3,

            intro: ``,

            image: "../images/working.png",
            sender: "+62 123-1234-4321",

            chat: [
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
            ],
            
            nCorrect: 2,
            choices : [
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
                
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
                
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
            ]
        },

        {   // Quest 8
            id: 8,
            type: 3,

            intro: ``,

            image: "../images/working.png",
            sender: "+62 123-1234-4321",

            chat: [
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
            ],
            
            nCorrect: 2,
            choices : [
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
                
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
                
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
            ]
        },

        {   // Quest 9
            id: 9,
            type: 3,

            intro: ``,

            image: "../images/working.png",
            sender: "+62 123-1234-4321",

            chat: [
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
            ],
            
            nCorrect: 2,
            choices : [
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
                
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
                
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
            ]
        },

        {   // Quest 10
            id: 10,
            type: 3,

            intro: ``,

            image: "../images/working.png",
            sender: "+62 123-1234-4321",

            chat: [
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
                `x: `,
            ],
            
            nCorrect: 2,
            choices : [
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
                
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
                
                [
                    ``,
                    ``,
                    ``,
                    ``,
                    ``,
                ],
            ]
        },
        
    ]
}