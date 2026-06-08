const gameData = {
    homePage: "../index.html",
    types: ["Aman", "Phishing", "Scam"],
    numOfQuestion: 10,

    form: {
        formAction: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScNOS0Eu9V9XhJV06CZXUMwZW3_5-kgtDF__U5yF7BuZv39UQ/formResponse",
        entries: [
            "entry.1151742671",
            "entry.57115759",
        ],
        entry1: "entry.1151742671",
        entry2: "entry.57115759",
    },

    opening: `Selamat datang di Chat Detective.<br><br>Pada permainan ini Anda akan berperan 
        sebagai seorang detektif yang menerima laporan mencurigakan terkait suatu obrolan 
        berbasis teks (chat). Tugas Anda adalah menebak, mana obrolan yang mungkin asli atau 
        yang terindikasi sebagai penipuan. Terdapat 10 kasus yang harus Anda selesaikan pada 
        permainan ini.<br><br>Selamat bermain.`,

    closing: `Permainan telah selesai.`,
    
    btnLabels: {
        scam: "Terindikasi<br>Penipuan",
        safe: "Mungkin<br>Aman",
        start: `Mulai`,
        next: `Lanjut`,
        home: `Kembali`,
    },

    toasts: {
        wrong: `Analisis Anda kurang tepat!`,
        badReason: `Salah satu alasan yang dipilih kurang sesuai.`,
        wrongReason: `Semua alasan yang Anda pilih tidak sesuai.`,
    },

    questions: [
        {   // No 1
            category: `Fake Website`,
            id: `fw`,
            intro: `Klien Anda adalah seorang member di suatu marketplace bernama Amajon. Suatu hari klien Anda menerima pesan dari seseorang yang mengaku customer service Amajon.`,

            image: "../images/working.png",
            sender: "Amajon Team Support",

            scam: [
                `x: Pelanggan yang terhormat, sebagai bentuk apresiasi kami terhadap kepercayaan Anda bertransaksi menggunakan layanan Amajon, maka kami ingin menawarkan kupon belanja senilai Rp. 50.000,- secara cuma-cuma.`,
                `x: Anda dapat menggunakan kupon tersebut untuk berbelanja berbagai macam produk di Amajon.`,
                `x: Untuk menerima penawaran ini, Anda harus melakukan klaim dengan login ke aplikasi atau website resmi Amajon melalui tautan berikut:`,
                `u: https://amajohn.com/klaim-kupon`,
                `x: Batas waktu klaim maksimum 1 jam setelah Anda menerima pesan ini.`,
                `x: Setelah melakukan klaim, Anda akan mendapatkan kupon belanja yang berlaku tanpa batasan waktu.`,
                `x: Waspadai segala bentuk penipuan yang mengatasnamakan pihak Amajon.`,
                `x: Terima kasih telah menjadi pelanggan setia Amajon.<br><br>Amajon Team Support`,
            ],

            real: [
                `x: Pelanggan yang terhormat, sebagai bentuk apresiasi kami terhadap kepercayaan Anda bertransaksi menggunakan layanan Amajon, maka kami ingin menawarkan kupon belanja senilai Rp. 50.000,- secara cuma-cuma.`,
                `x: Anda dapat menggunakan kupon tersebut untuk berbelanja berbagai macam produk di Amajon.`,
                `x: Untuk menerima penawaran ini, Anda harus melakukan klaim dengan login ke aplikasi atau website resmi Amajon melalui tautan berikut:`,
                `u: https://amajon.com/klaim-kupon`,
                `x: Batas waktu klaim maksimum 1 jam setelah Anda menerima pesan ini.`,
                `x: Setelah melakukan klaim, Anda akan mendapatkan kupon belanja yang berlaku tanpa batasan waktu.`,
                `x: Waspadai segala bentuk penipuan yang mengatasnamakan pihak Amajon.`,
                `x: Terima kasih telah menjadi pelanggan setia Amajon.<br><br>Amajon Team Support`,
            ],

            nCorrect: 2,
            choices: [
                `Alamat website terindikasi palsu.`,
                `Batas waktu penawaran sangat pendek.`,
                `Bahasa terkesan formal dan sopan.`,
                `Nominal kupon belanja tidak masuk akal.`,
                `Ada upaya mengingatkan akan bahaya penipuan.`,
            ],

            note: `Selalu pastikan tautan dengan seksama ketika Anda diminta untuk mengakses suatu website.`,
        },

        {   // No 2
            category: `Fake Website`,
            id: `fw`,
            intro: `Klien Anda adalah seorang member dari layanan video streaming bernama Nextflip. Pada tanggal 30 Mei, klien Anda menerima pesan dari seseorang yang mengaku cusomer service Nextflip.`,

            image: "../images/working.png",
            sender: "Nextflip Team Support",

            scam: [
                `x: Pelanggan yang terhormat, karena adanya kebijakan perubahan tarif layanan, maka per tanggal 1 Juni, biaya berlangganan akan naik sebesar 5% untuk semua jenis paket berlangganan.`,
                `x: Jika Anda melakukan perpanjangan durasi berlangganan di bulan ini, maka Anda berhak menikmati tarif lama sebelum kenaikan (syarat dan ketentuan berlaku).`,
                `x: Durasi berlangganan bersifat akumulatif dan secara otomatis akan ditambahkan ke paket durasi berlangganan Anda.`,
                `x: Untuk menerima penawaran ini, Anda dapat melakukan perpanjangan melalui website utama:`,
                `u: https://perpanjangan-paket-nextflip.com`,
                `x: Harap berhati-hati terhadap segala bentuk penipuan yang mengatasnamakan pihak Nextflip.`,
                `x: Pihak Nextflip tidak pernah meminta data pribadi pelanggan di luar website atau aplikasi resmi Nextflip.`,
                `x: Terima Kasih<br>Nextflip Customer Care`,
            ],

            real: [
                `x: Pelanggan yang terhormat, karena adanya kebijakan perubahan tarif layanan, maka per tanggal 1 bulan depan, biaya berlangganan akan naik sebesar 5% untuk semua jenis paket berlangganan.`,
                `x: Jika Anda melakukan perpanjangan durasi berlangganan di bulan ini, maka Anda berhak menikmati tarif lama sebelum kenaikan (syarat dan ketentuan berlaku).`,
                `x: Durasi berlangganan bersifat akumulatif dan secara otomatis akan ditambahkan ke paket durasi berlangganan Anda.`,
                `x: Untuk menerima penawaran ini, Anda dapat melakukan perpanjangan melalui website utama:`,
                `u: https://id.nextflip.com/perpanjangan`,
                `x: Harap berhati-hati terhadap segala bentuk penipuan yang mengatasnamakan pihak Nextflip.`,
                `x: Pihak Nextflip tidak pernah meminta data pribadi pelanggan di luar website atau aplikasi resmi Nextflip.`,
                `x: Terima Kasih<br>Nextflip Customer Care`,
            ],

            nCorrect: 2,
            choices: [
                `Alamat website terindikasi palsu.`,
                `Batas waktu penawaran sangat pendek.`,
                `Bahasa terkesan formal dan sopan.`,
                `Penawaran terkesan tidak wajar.`,
                `Kenaikan biaya terkesan tidak wajar.`,
            ],

            note: `Perhatikan dengan detail penggunakan karakter dash ”-” dan dot ”.” pada suatu alamat website.`,
        },

        {   // No 3
            category: `Advance Fee`,
            id: `af`,
            intro: `Klien Anda membeli sebuah kado melalui marketplace bernama Amajon untuk adiknya yang akan berulang tahun. Beberapa saat setelah melakukan pembayaran, klien Anda menerima pesan dari pihak yang mengaku kurir pengiriman.`,

            image: "../images/working.png",
            sender: "+62 112-3344-5566",

            scam: [
                `x: Salam kak. Kami dari pihak ekspedisi Neko Express, mau menginformasikan bahwa paket Anda baru saja kami terima dari penjual.`,
                `x: Kategori paket kakak adalah paket reguler dengan estimasi perkiraan tiba sekitar 5-10 hari.`,
                `x: Kakak dapat meningkatkan kategori paket menjadi paket kilat untuk estimasi waktu perkiraan tiba 1-3 hari dengan tambahan biaya pengiriman sebesar Rp. 10.000,-.`,
                `x: Abaikan pesan ini jika Anda tidak ingin meningkatkan kategori paket. Terima kasih.`,
                `y: Bagaimana prosesnya?`,
                `x: Karena kakak tidak punya akun Neko Express, saya bisa bantu prosesnya menggunakan akun saya kak.`,
                `x: Kakak cukup kirim uangnya ke saya saja, bisa transfer atau lewat QRIS.`,
            ],

            real: [
                `x: Salam kak. Kami dari pihak ekspedisi Neko Express, mau menginformasikan bahwa paket Anda baru saja kami terima dari penjual.`,
                `x: Kategori paket kakak adalah paket reguler dengan estimasi perkiraan tiba sekitar 5-10 hari.`,
                `x: Kakak dapat meningkatkan kategori paket menjadi paket kilat untuk estimasi waktu perkiraan tiba 1-3 hari dengan tambahan biaya pengiriman sebesar Rp. 10.000,-.`,
                `x: Abaikan pesan ini jika Anda tidak ingin meningkatkan kategori paket. Terima kasih.`,
                `y: Bagaimana prosesnya?`,
                `x: Bisa lewat website Neko Express kak, nanti pilih menu upgrade paket, lalu masukkan nomor resinya.`,
                `x: Nanti pembayarannya bisa lewat minimarket, transfer, atau QRIS.`,
            ],

            nCorrect: 2,
            choices: [
                `Meminta pengiriman sejumlah uang.`,
                `Menciptakan suatu dilema.`,
                `Biaya tambahan tidak masuk akal.`,
                `Penawaran tidak masuk akal.`,
                `Bahasa terkesan formal dan sopan.`,
            ],

            note: `Jangan pernah melakukan pembayaran di luar aplikasi resmi.`,
        },

        {   // No 4
            category: `Advanced Fee`,
            id: `af`,
            intro: `Klien Anda adalah seorang mahasiswa berprestasi yang aktif dalam beberapa kegiatan akademik. Suatu hari, seseorang yang mengaku Sekretaris Wakil Rektor Bidang Akademik menghubunginya melalui chat.`,

            image: "../images/working.png",
            sender: "+62 123-4567-7890",

            scam: [
                `x: Assalamualaikum, Wr. Wb.`,
                `x: Perkenalkan saya Sakura, sekretarisnya Prof. Kakashi, Wakil Rektor Bidang Akademik.`,
                `x: Apakah benar ini nomornya Mbak Ino dari Prodi Informatika?`,
                `y: Waalaikumsalam, Wr. Wb. Iya benar.`,
                `y: Ada apa ya Bu Sakura?`,
                `x: Mbak Ino, bulan depan Prof. Kakashi akan melakukan kunjungan kerja sama ke Ibaraki University Jepang dan berencana akan mengajak beberapa mahasiswa berprestasi untuk menambah wawasan internasional.`,
                `x: Mbak Ino diharapkan bisa ikut berangkat juga untuk mempresentasikan sistem yang kemarin menang lomba itu Mbak.`,
                `x: Untuk transportasi dan akomodasi akan dibiayai sepenuhnya oleh universitas. Mbak Ino cukup menyiapkan passport saja.`,
                `x: Mbak Ino sudah punya passport?`,
                `y: Belum punya Bu.`,
                `x: Ini temen-temen yang lain juga belum pada punya passport. Mbak Ino ikut ngurus bareng-bareng yang lain aja lewat agen passport langganannya universitas. Biayanya sekitar Rp. 850.000.`,
                `y: Baik Bu, bagaimana prosedurnya?`,
                `x: Mbak Ino transfer ke rekening saya dulu aja kayak yang lain, nanti saya yang koordinasikan dengan agen passportnya biar prosesnya lebih cepat.`,
            ],

            real: [
                `x: Assalamualaikum, Wr. Wb.`,
                `x: Perkenalkan saya Sakura, sekretarisnya Prof. Kakashi, Wakil Rektor Bidang Akademik.`,
                `x: Apakah benar ini nomornya Mbak Ino dari Prodi Informatika?`,
                `y: Waalaikumsalam, Wr. Wb. Iya benar.`,
                `y: Ada apa ya Bu Sakura?`,
                `x: Mbak Ino, bulan depan Prof. Kakashi akan melakukan kunjungan kerja sama ke Ibaraki University Jepang dan berencana akan mengajak beberapa mahasiswa berprestasi untuk menambah wawasan internasional.`,
                `x: Mbak Ino diharapkan bisa ikut berangkat juga untuk mempresentasikan sistem yang kemarin menang lomba itu Mbak.`,
                `x: Untuk transportasi dan akomodasi akan dibiayai sepenuhnya oleh universitas. Mbak Ino cukup menyiapkan passport saja.`,
                `x: Mbak Ino sudah punya passport?`,
                `y: Belum punya Bu.`,
                `x: Ini temen-temen yang lain juga belum pada punya passport. Mbak Ino ikut ngurus bareng-bareng yang lain aja lewat agen passport langganannya universitas. Biayanya sekitar Rp. 850.000.`,
                `y: Baik Bu, bagaimana prosedurnya?`,
                `x: Besok datang saja jam 8:30 ke ruang sekretaris wakil rektor untuk menemui saya. Nanti akan saya jelas prosedurnya.`,
            ],

            nCorrect: 2,
            choices: [
                `Meminta mentransfer sejumlah uang.`,
                `Penawarannya terlihat terlalu berlebihan.`,
                `Biaya passport terlalu mahal.`,
                `Terkesan sudah mengenal dekat.`,
                `Bahasanya tidak terlalu formal.`,
            ],

            note: `Lakukan verifikasi melalui sumber lain untuk penawaran yang tidak umum, tidak wajar, atau terlalu berlebihan.`,
        },

        {   // No 5
            category: `Phishing`,
            id: `ph`,
            intro: `Klien Anda adalah seorang nasabah Bank Sentosa. Suatu hari klien Anda mendapatkan pesan dari seseorang yang mengaku sebagai petugas Bank Sentosa.`,

            image: "../images/working.png",
            sender: "Bank Sentosa",

            scam: [
                `x: Selamat siang nasabah yang terhormat. Perkenalkan nama saya Intan, dari unit perlindungan nasabah Bank Sentosa.`,
                `x: Kami mendeteksi adanya aktivitas login dari perangkat baru yang tidak biasa.`,
                `x: Abaikan pesan ini jika Anda melakukan aktivitas login tersebut.`,
                `y: Saya tidak melakukan login<br>dari perangkat manapun.`,
                `x: Untuk memastikan Anda adalah pemilik rekening yang sah, maka beberapa saat lagi kami akan mengirimkan kode OTP melalui SMS ke nomor Anda.`,
                `x: Segera lakukan verifikasi dengan mengirimkan nama lengkap, nomor rekening, dan kode OTP yang telah Anda terima!`,
                `x: Setelah terverifikasi, saya akan lakukan pembekuan terhadap rekening Anda untuk mencegah pihak yang tidak berwenang melakukan transaksi.`,
                `x: Untuk memastikan keamanan rekening Anda, jangan berikan kode OTP ke pihak lain.`,
            ],

            real: [
                `x: Selamat siang nasabah yang terhormat. Perkenalkan nama saya Intan, dari unit perlindungan nasabah Bank Sentosa.`,
                `x: Kami mendeteksi adanya aktivitas login dari perangkat baru yang tidak biasa.`,
                `x: Abaikan pesan ini jika Anda melakukan aktivitas login tersebut.`,
                `y: Saya tidak melakukan login<br>dari perangkat manapun.`,
                `x: Untuk memastikan Anda adalah pemilik rekening yang sah, maka beberapa saat lagi kami akan mengirimkan kode OTP melalui SMS ke nomor Anda.`,
                `x: Segera lakukan verifikasi dengan login ke aplikasi resmi Sentosa Mobile menggunakan kode OTP tersebut!`,
                `x: Untuk memastikan keamanan rekening Anda, jangan berikan kode OTP ke pihak lain.`,
            ],

            nCorrect: 2,
            choices: [
                `Meminta mengirimkan kode OTP.`,
                `Menciptakan suatu dilema.`,
                `Terkesan mengenal korban dengan baik.`,
                `Menawarkan bantuan yang tidak wajar.`,
                `Bahasa terkesan formal dan sopan.`,
            ],

            note: `Kode OTP hanya digunakan melalui aplikasi resmi, jangan berikan kode OTP kepada orang lain.`,
        },

        {   // No 6
            category: `Phishing`,
            id: `ph`,
            intro: `Klien Anda baru saja mengikuti chat group komunitas traveling yang ia temukan di media sosial. Tidak lama kemudian, seseorang yang mengaku admin komunitas tersebut menhubunginya.`,

            image: "../images/working.png",
            sender: "+62 987-8765-6543",

            scam: [
                `x: Salam kak, selamat datang di komunitas traveling ”Jalan Terus”. Perkenalkan aku Lilie, selaku admin komunitas ini.`,
                `x: Untuk proses verifikasi member baru, kami perlu informasi identitas umum dan kontak kerabat dekat kak.`,
                `y: Salam kenal kak.`,
                `y: Itu informasinya untuk apa ya kak? Apa ada biaya keanggotaannya juga?`,
                `x: Ngga ada biaya keanggotaan kak, semuanya gratis, kami cuma ngambil keuntungan dari penjualan tiket aja kak.`,
                `x: Informasi itu nanti dipakai kalau kakak mau book tiket biar prosesnya cepet. Soalnya tiket murah yang kami tawarin biasanya jadi rebutan dan cepet sekali sold.`,
                `y: Informasi yang dibutuhkan<br>apa aja kak?`,
                `x: Cukup foto KTP dan passport (kalau udah punya passport), sama kontak kerabat dekat.`,
                `x: Kontak kerabat dekat untuk keamanan kakak sendiri Kalau misal selama perjalanan ada apa-apa, nanti kami akan mengontak kerabat dekatnya kakak. Jadi kerabat dekat ini bisa orang tua, kakak, adik, saudara, atau suami/istri kakak.`,
                `y: Datanya dikirim ke mana kak?`,
                `x: Dikirim lewat chat aja gpp kak, nanti saya yang bantu proses verifikasinya.`,
            ],

            real: [
                `x: Salam kak, selamat datang di komunitas traveling ”Jalan Terus”. Perkenalkan aku Lilie, selaku admin komunitas ini.`,
                `x: Untuk proses verifikasi member baru, kami perlu informasi identitas umum dan kontak kerabat dekat kak.`,
                `y: Salam kenal kak.`,
                `y: Itu informasinya untuk apa ya kak? Apa ada biaya keanggotaannya juga?`,
                `x: Ngga ada biaya keanggotaan kak, semuanya gratis, kami cuma ngambil keuntungan dari penjualan tiket aja kak.`,
                `x: Informasi itu nanti dipakai kalau kakak mau book tiket biar prosesnya cepet. Soalnya tiket murah yang kami tawarin biasanya jadi rebutan dan cepet sekali sold.`,
                `y: Informasi yang dibutuhkan<br>apa aja kak?`,
                `x: Cukup nama lengkap sesuai KTP dan nomor telepon yang akan digunakan untuk konfirmasi pada saat pemesanan tiket.`,
                `y: Kalau pakai nomor telepon ini bisa kak?`,
                `x: Bisa, asalkan nomornya bisa ditelepon dan menerima SMS, karena notifikasi reservasi tiket biasanya dikirim melalui SMS.`,
            ],

            nCorrect: 2,
            choices: [
                `Meminta informasi sensitif melalui chat.`,
                `Meminta data kontak yang sensitif.`,
                `Menggunakan bahasa yang santai`,
                `Menawarkan bantuan yang tidak wajar.`,
                `Mengaku sebagai admin komunitas.`,
            ],

            note: `Kenali data pribadi yang termasuk sebagai data sensitif agar terhindar dari aktivitas phishing.`,
        },

        {   // No 7
            category: `Malware`,
            id: `mw`,
            intro: `Klien Anda adalah seorang nasabah Bank Ceria. Suatu hari klien Anda mendapatkan pesan dari seorang yang mengaku sebagai petugas Bank Ceria.`,

            image: "../images/working.png",
            sender: "Bank Ceria",

            scam: [
                `x: Selamat siang nasabah yang terhormat. Perkenalkan nama saya Lili, dari unit perlindungan nasabah Bank Sentosa.`,
                `x: Untuk melindungi rekening Anda dari percobaan peretasan/hacking yang saat ini marak terjadi, kami sarankan menggunakan aplikasi ”Belanja Ceria” untuk transaksi kecil sehari-hari.`,
                `x: Aplikasi ini dapat memisahkan saldo utama Anda dengan saldo yang digunakan untuk transaksi sehari-hari, sehingga saldo utama Anda akan tetap aman jika terjadi peretasan/hacking pada saldo untuk transaksi sehari-hari.`,
                `x: Silakan unduh dan instal aplikasi ”Belanja Ceria” berikut ini:`,
                `z: Belanja Ceria`,
                `x: Jangan berikan data pribadi atau kode OTP, kepada pihak yang mentasnamakan Bank Ceria.`,
                `x: Bank Ceria tidak pernah meminta data pribadi atau kode OTP nasabah melalui jalur tidak resmi seperti chat, email, SMS, atau telepon.`,
                `x: Terima kasih.<br>Unit Perlindungan Nasabah<br>Bank Ceria`,
            ],

            real: [
                `x: Selamat siang nasabah yang terhormat. Perkenalkan nama saya Lili, dari unit perlindungan nasabah Bank Sentosa.`,
                `x: Untuk melindungi rekening Anda dari percobaan peretasan/hacking yang saat ini marak terjadi, kami sarankan menggunakan aplikasi ”Belanja Ceria” untuk transaksi kecil sehari-hari.`,
                `x: Aplikasi ini dapat memisahkan saldo utama Anda dengan saldo yang digunakan untuk transaksi sehari-hari, sehingga saldo utama Anda akan tetap aman jika terjadi peretasan/hacking pada saldo untuk transaksi sehari-hari.`,
                `x: Silakan instal aplikasi ”Belanja Ceria” yang dikembangkan oleh ”Bank Ceria App” melalui Google Play Store atau Apple App Store.`,
                `x: Hati-hati terhadap upaya penipuan. Aplikasi ”Belanja Ceria” yang asli hanya diterbitkan oleh ”Bank Ceria App” dan didistribusikan melalui Google Play atau Apple App Store.`,
                `x: Terima kasih.<br>Unit Perlindungan Nasabah<br>Bank Ceria`,
            ],

            nCorrect: 2,
            choices: [
                `Meminta mengunduh file APK.`,
                `Meminta menginstal aplikasi tidak resmi.`,
                `Memberikan informasi yang tidak benar.`,
                `Menawarkan bantuan yang tidak wajar.`,
                `Menawarkan keuntungan yang tidak wajar.`,
            ],

            note: `Waspadai aplikasi yang diunduh dan diinstal di luar Google Play Store atau Apple App Store.`,
        },

        {   // No 8
            category: `Malware`,
            id: `mw`,
            intro: `Klien Anda adalah seorang mahasiswa yang ingin mencari pekerjaan sampingan melalui sebuah website lowongan pekerjaan bernama “Extra Work”. Suatu hari klien Anda mendapatkan pesan dari seseorang yang mengaku sebagai admin Extra Work.`,

            image: "../images/working.png",
            sender: "Extra Work Administrator",

            scam: [
                `x: Selamat siang kak, perkenalkan saya Nana selaku admin Extra Work.`,
                `x: Terima kasih karena telah menggunakan layanan kami untuk mencari pekerjaan tambahan.`,
                `x: Sebagai layanan untuk member professional, kami ingin menawarkan beberapa pekerjaan tambahan dengan penghasilan sekitar Rp.300.000 – Rp. 800.000/minggu yang cocok dengan profil kakak sebagai mahasiswa.`,
                `x: Kakak bisa mengecek jenis-jenis pekerjaannya melalui daftar berikut:`,
                `z: Extra Work Job List`,
                `x: Ada sekitar 150 jenis pekerjaan yang cocok dengan profil kakak. Jika kakak tertarik dengan salah satunya, kakak bisa langsung mendaftar melalui website Extra Work.`,
                `y: Oke, terima kasih informasinya.`,
                `x: Terima kasih kembali kak. Jika ada yang ingin ditanyakan, jangan ragu untuk menghubungi saya.`,
            ],

            real: [
                `x: Selamat siang kak, perkenalkan saya Nana selaku admin Extra Work.`,
                `x: Terima kasih karena telah menggunakan layanan kami untuk mencari pekerjaan tambahan.`,
                `x: Sebagai layanan untuk member professional, kami ingin menawarkan beberapa pekerjaan tambahan dengan penghasilan sekitar Rp.300.000 – Rp. 800.000/minggu yang cocok dengan profil kakak sebagai mahasiswa.`,
                `x: Kakak bisa mengecek jenis-jenis pekerjaannya melalui website Extra Work di laman Profil kemudian pilih menu ”Recommended Job List”.`,
                `x: Jika kakak tertarik dengan salah satunya, kakak bisa langsung melakukan pendaftaran pada pekerjaan yang diinginkan.`,
                `y: Oke, terima kasih informasinya.`,
                `x: Terima kasih kembali kak. Jika ada yang ingin ditanyakan, jangan ragu untuk menghubungi saya.`,
            ],

            nCorrect: 2,
            choices: [
                `Meminta mengunduh file APK.`,
                `Meminta menginstal aplikasi tidak resmi.`,
                `Gaji yang ditawarkan tidak wajar.`,
                `Ada kesan memaksa.`,
                `Menggunakan bahasa yang sopan.`,
            ],

            note: `Selalu perhatikan ekstensi file sebelum Anda mengunduh file tersebut. Hindari mengunduh file APK.`,
        },

        {   // No 9
            category: `Emotional`,
            id: `em`,
            intro: `Tanpa informasi sebelumnya, klien Anda menerima informasi penggalangan dana dari seseorang yang mengaku sebagai perwakilan alumni dari almamaternya.`,

            image: "../images/working.png",
            sender: "+62 456-4567-6789",

            scam: [
                `x: Assalamualaikum, Wr. Wb.`,
                `x: Rekan-rekan Informatika, perkenalkan nama saya Oni, salah satu pengurus di Ikatan Keluarga Alumni Informatika UII.`,
                `x: Saat ini kami sedang melakukan penggalangan dana untuk korban gempa di Kawakarta.`,
                `x: Bencana ini telah merenggut banyak korban. Banyak keluarga kehilangan tempat tinggal dan membutuhkan bantuan makanan serta obat-obatan segera.`,
                `x: Agar penyaluran bantuan tepat sasaran, kami akan bekerja sama dengan relawan lokal untuk mendistribusikan bantuan secara langsung.`,
                `x: Bagi yang ingin berdonasi, dapat menyalurkan bantuan melalui rekening berikut:`,
                `x: Bank Sentosa<br>a/n Oni Maharu.<br>3748593`,
                `x: Setiap bantuan yang rekan-rekan berikan akan sangat membantu para korban.`,
                `x: Salam Informatika.<br>Wassalamualaikum, Wr. Wb.`,
            ],

            real: [
                `x: Assalamualaikum, Wr. Wb.`,
                `x: Rekan-rekan Informatika, perkenalkan nama saya Oni, salah satu pengurus di Ikatan Keluarga Alumni Informatika UII.`,
                `x: Saat ini kami sedang melakukan penggalangan dana untuk korban gempa di Kawakarta.`,
                `x: Bencana ini telah merenggut banyak korban. Banyak keluarga kehilangan tempat tinggal dan membutuhkan bantuan makanan serta obat-obatan segera.`,
                `x: Agar penyaluran bantuan tepat sasaran, kami akan bekerja sama dengan relawan lokal untuk mendistribusikan bantuan secara langsung.`,
                `x: Bagi yang ingin berdonasi, dapat menyalurkan bantuan melalui Kosema atau koordinator masing-masing angkatan.`,
                `x: Setiap bantuan yang rekan-rekan berikan akan sangat membantu para korban.`,
                `x: Salam Informatika.<br>Wassalamualaikum, Wr. Wb.`,
            ],

            nCorrect: 2,
            choices: [
                `Meminta mentransfer sejumlah uang.`,
                `Rekening penerima adalah rekening pribadi.`,
                `Memanfaatkan isu bantuan kemanusiaan.`,
                `Informasi disampaikan secara personal.`,
                `Ada kesan memaksa untuk berdonasi.`,
            ],

            note: `Salurkan bantuan Anda melalui lembaga resmi dan terpercaya melalui penyerahan secara langsung atau transfer ke rekening organisasi/lembaga/kelompok yang kredibel.`,
        },

        {   // No 10
            category: `Emotional`,
            id: `em`,
            intro: `Klien Anda adalah seorang aktivis mahasiswa yang peduli dengan lingkungan. Setelah terjadi bencana banjir bandang di kota Kawakarta, klien Anda dihubungi oleh seseorang yang mengaku sebagai koordinator Basarnas (Badan Nasional Pencarian dan Pertolongan).`,

            image: "../images/working.png",
            sender: "+62 234-2345-5432",

            scam: [
                `x: Salam Lestari, perkenalkan nama saya Tanto, staf lapangan Basarnas yang menjadi koordinator bencana alam di Kawakarta.`,
                `x: Rekan-rekan mahasiswa, dalam beberapa hari ini kita telah mendengar kabar duka dari Kawakarta.`,
                `x: Bencana banjir bandang yang baru saja terjadi telah merenggut banyak korban, menyebabkan infrastruktur lumpuh dan banyak keluarga kehilangan tempat tinggal.`,
                `x: Banyak donasi dalam bentuk makanan, obat-obatan, pakaian, dan uang telah tersalurkan kepada para korban.`,
                `x: Di samping donasi tersebut, mereka juga memerlukan bantuan tenaga untuk memulihkan beberapa infrastruktur yang hancur.`,
                `x: Kami mengajak para relawan untuk turun langsung ke wilayah terdampak bencana.`,
                `x: Gelombang selanjutnya akan diberangkatkan pada hari Sabtu. Jika rekan-rekan tergerak untuk berpartisipasi, silakan melakukan pendaftaran relawan dengan mengirimkan nama lengkap, alamat, kontak orangtua/wali (beserta nama lengkap), dan foto KTP/SIM melalui chat ini.`,
                `x: Batas waktu pendaftaran adalah hari ini, pukul 20:00 WIB.`,
                `x: Terima kasih atas kepedulian rekan-rekan semua.<br>Salam lestari,`,
            ],

            real: [
                `x: Salam Lestari, perkenalkan nama saya Tanto, staf lapangan Basarnas yang menjadi koordinator bencana alam di Kawakarta.`,
                `x: Rekan-rekan mahasiswa, dalam beberapa hari ini kita telah mendengar kabar duka dari Kawakarta.`,
                `x: Bencana banjir bandang yang baru saja terjadi telah merenggut banyak korban, menyebabkan infrastruktur lumpuh dan banyak keluarga kehilangan tempat tinggal.`,
                `x: Banyak donasi dalam bentuk makanan, obat-obatan, pakaian, dan uang telah tersalurkan kepada para korban.`,
                `x: Di samping donasi tersebut, mereka juga memerlukan bantuan tenaga untuk memulihkan beberapa infrastruktur yang hancur.`,
                `x: Kami mengajak para relawan untuk turun langsung ke wilayah terdampak bencana.`,
                `x: Gelombang selanjutnya akan diberangkatkan pada hari Sabtu. Jika rekan-rekan tergerak untuk berpartisipasi, silakan melakukan pendaftaran relawan di kantor pusat Basarnas, jalan Ayukawacho, B-201 dengan membawa identitas (KTP/SIM).`,
                `x: Batas waktu pendaftaran adalah hari ini, pukul 20:00 WIB.`,
                `x: Terima kasih atas kepedulian rekan-rekan semua.<br>Salam lestari,`,
            ],

            nCorrect: 2,
            choices: [
                `Meminta data KTP/SIM secara tidak wajar.`,
                `Ada tekanan untuk segera mendaftar.`,
                `Mengatasnamakan instansi pemerintah.`,
                `Memperkenalkan diri agar terlihat akrab.`,
                `Memanfaatkan isu bantuan kemanusiaan.`,
            ],

            note: `Jangan pernah memberikan foto identitas melalui chat untuk orang yang tidak Anda kenal.`,
        },

    ],
}