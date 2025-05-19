    let namaUser = "";
    let currentKarir = "";
    let currentIndex = 0;
    let jawabanUser = [];

    const databaseKarir = {
      "guru":[
        "Apakah kamu mampu bersabar dalam menghadapi murid dengan berbagai latar belakang dan perilaku yang berbeda?",
        "Apakah kamu merasa percaya diri saat harus menyampaikan materi di depan banyak orang?Apakah kamu suka anak-anak?",
        "Apakah kamu peduli terhadap perkembangan akademik dan emosional setiap murid?",
        "Seberapa disiplin kamu dalam mengikuti jadwal dan aturan yang berlaku?",
        "Apakah kamu sering mencari cara-cara kreatif untuk membuat pembelajaran lebih menarik?",
        "Apakah kamu biasanya penuh semangat saat mengajar dan mudah menularkan energi positif ke orang lain?",
        "Apakah kamu teliti saat memeriksa tugas atau ujian siswa?",
        "Apakah kamu bisa dengan mudah menyesuaikan diri dengan perubahan kurikulum atau metode belajar baru?",
        "Apakah kamu merasa nyaman memimpin kelas dan menjadi contoh bagi murid-muridmu?",
        "Apakah kamu bisa bersikap tegas dalam mengatur kelas tanpa memperlakukan murid secara tidak adil?"],

      "data analyst": [
        "Apakah kamu senang menganalisis angka dan data untuk menemukan pola tersembunyi?",
        "Apakah kamu merasa puas ketika berhasil menyelesaikan masalah logis yang rumit?",
        "Seberapa teliti kamu dalam memeriksa angka dan kesalahan kecil?",
        "Apakah kamu mampu menjelaskan data yang kompleks dengan cara yang mudah dipahami orang awam?",
        "Apakah kamu suka membuat laporan atau visualisasi dari hasil analisis data?",
        "Seberapa besar keinginanmu untuk terus belajar alat atau software analisis terbaru?",
        "Apakah kamu bisa bekerja lama dengan fokus di depan komputer?",
        "Apakah kamu bisa bekerja mandiri tanpa pengawasan ketat?",
        "Apakah kamu merasa tertantang saat harus membersihkan data yang berantakan?",
        "Apakah kamu sering mempertanyakan hasil dan mencari bukti sebelum membuat kesimpulan?"],

      "desainer grafis": [
        "Apakah kamu sering memikirkan cara membuat sesuatu jadi lebih menarik secara visual?",
        "Apakah kamu menikmati membuat ilustrasi, poster, atau desain digital?",
        "Seberapa baik kamu menerima kritik dan revisi dari klien atau rekan kerja?kah kamu suka desain visual?",
        "Apakah kamu punya ketertarikan terhadap warna, tipografi, dan tata letak?",
        "Apakah kamu selalu mengikuti tren desain terbaru?",
        "Apakah kamu punya kemampuan untuk memahami keinginan klien dari brief singkat?",
        "Apakah kamu detail terhadap hasil akhir desainmu?",
        "Apakah kamu bisa bekerja dalam deadline yang ketat?",
        "Apakah kamu suka eksplorasi desain baru meskipun hasil awalnya belum sempurna?",
        "Apakah kamu sering menemukan inspirasi visual dari hal-hal di sekitarmu?"],

      "programer": [
        "Apakah Anda suka memecahkan masalah logis dan tantangan teknis?",
        "Apakah Anda teliti dalam memperhatikan setiap detail pada kode yang ditulis?",
        "Apakah Anda senang menemukan solusi kreatif dalam membangun sistem?",
        "Apakah Anda sabar saat harus melakukan debugging dalam waktu lama?",
        "Apakah Anda selalu menulis kode secara konsisten dan rapi?",
        "Apakah Anda mampu bekerja secara mandiri tanpa pengawasan ketat?",
        "Apakah Anda nyaman bekerja dalam tim pengembangan proyek besar?",
        "Apakah Anda terus tertarik mempelajari teknologi dan bahasa pemrograman baru?",
        "Apakah Anda terorganisir dalam mengelola file, folder, dan struktur proyek?",
        "Apakah Anda selalu mengejar hasil yang sempurna dan bebas dari bug?"],

      "dokter": [
        "Apakah kamu merasa bahagia saat bisa membantu orang lain merasa lebih baik?",
        "Seberapa tenang kamu saat menghadapi situasi kritis atau darurat?",
        "Apakah kamu bisa fokus untuk waktu yang lama saat bekerja?",
        "Apakah kamu teliti dalam memperhatikan gejala atau keluhan seseorang?",
        "Apakah kamu siap untuk belajar seumur hidup dalam bidang kesehatan?",
        "Apakah kamu bisa tetap sabar menghadapi pasien yang sulit?",
        "Apakah kamu mampu menjaga etika dan rahasia pasien?",
        "Apakah kamu nyaman bekerja di lingkungan yang penuh tekanan?",
        "Apakah kamu bersedia mengorbankan waktu pribadi demi tugas medis?",
        "Apakah kamu senang bekerja dalam tim medis dan berkoordinasi dengan perawat?"],
        
      "digital marketing": [
        "Apakah kamu senang membuat konten kreatif untuk menarik perhatian orang?",
        "Seberapa sering kamu mengevaluasi hasil kampanye atau postingan media sosial?",
        "Apakah kamu cepat tanggap terhadap perubahan tren di media digital?",
        "Apakah kamu mampu bekerja dengan target dan metrik yang jelas?",
        "Apakah kamu nyaman menggunakan berbagai tools digital dan analitik?",
        "Apakah kamu bisa membuat strategi pemasaran yang unik dan berbeda?",
        "Apakah kamu suka melakukan eksperimen untuk meningkatkan performa iklan?",
        "Seberapa baik kamu memahami perilaku dan kebutuhan audiens?",
        "Apakah kamu bisa bekerja di bawah tekanan dan deadline ketat?",
        "Apakah kamu bisa menjelaskan hasil kampanye dalam bentuk data yang meyakinkan?"],

      "polisi": [
        "Apakah Anda memiliki keberanian untuk menghadapi situasi berbahaya di lapangan?",
        "Apakah Anda bisa bersikap tegas saat menegakkan hukum?",
        "Apakah Anda menjunjung tinggi kejujuran dan integritas dalam bertugas?",
        "Apakah Anda mampu memahami dan berempati pada kondisi masyarakat?",
        "Apakah Anda selalu berusaha bersikap adil tanpa membeda-bedakan dalam menangani kasus?",
        "Apakah Anda cepat tanggap dalam merespon kejadian atau panggilan darurat?",
        "Apakah Anda disiplin dalam menjalankan tugas dan prosedur kepolisian?",
        "Apakah Anda dapat berkomunikasi secara jelas dan baik dengan masyarakat?",
        "Apakah Anda kuat secara mental dan fisik untuk menghadapi tekanan pekerjaan?",
        "Apakah Anda mampu berpikir kritis dalam menganalisis suatu kejadian?"],
        
      "pengusaha": [
        "Apakah kamu merasa tertantang saat menghadapi risiko dan ketidakpastian?",
        "Apakah kamu punya visi jangka panjang dalam hidup atau karier?",
        "Apakah kamu bisa bangkit dari kegagalan dengan cepat?",
        "Apakah kamu sering menemukan peluang dari masalah di sekitarmu?",
        "Apakah kamu suka mengambil inisiatif dan membuat keputusan sendiri?",
        "Apakah kamu merasa nyaman memimpin tim atau memotivasi orang lain?",
        "Apakah kamu bisa fleksibel ketika rencana tidak berjalan sesuai harapan?",
        "Apakah kamu punya dorongan kuat untuk sukses secara mandiri?",
        "Apakah kamu bisa menjaga hubungan baik dengan mitra atau pelanggan?",
        "Apakah kamu suka merancang strategi dan perencanaan bisnis?"],

      "pejabat": [
        "Apakah kamu punya kemampuan berbicara dan menjelaskan kebijakan dengan baik?",
        "Apakah kamu bisa menjaga integritas meskipun dalam tekanan politik?",
        "Apakah kamu nyaman memimpin dan mengambil keputusan besar?",
        "Apakah kamu bisa menjadi pendengar yang baik bagi masyarakat?",
        "Apakah kamu mampu berpikir jangka panjang dan strategis?",
        "Apakah kamu tetap tenang dalam situasi konflik atau protes publik?",
        "Apakah kamu bisa bersikap adil kepada semua pihak tanpa memihak?",
        "Apakah kamu siap bekerja demi kepentingan publik, bukan pribadi?",
        "Apakah kamu mampu beradaptasi dalam perubahan kebijakan atau sistem?",
        "Apakah kamu aktif membangun relasi sosial dan komunikasi lintas sektor?"],

      "content creator": [
        "Apakah kamu punya banyak ide konten yang bisa menghibur atau mengedukasi?",
        "Apakah kamu suka berbicara di depan kamera atau membuat video?",
        "Seberapa konsisten kamu dalam membuat dan memposting konten?",
        "Apakah kamu cepat tanggap terhadap tren media sosial?",
        "Apakah kamu senang belajar teknik editing, scriptwriting, atau storytelling?",
        "Apakah kamu nyaman menerima komentar atau kritik dari audiens?",
        "Apakah kamu bisa membangun persona yang unik di media sosial?",
        "Apakah kamu bisa bekerja sendiri dari ide sampai eksekusi konten?",
        "Apakah kamu peka terhadap apa yang disukai atau dibutuhkan followers-mu?",
        "Apakah kamu melihat data statistik untuk mengevaluasi performa kontenmu?"],

      "pengacara": [
        "Apakah kamu suka berdebat dan membela pendapat dengan argumen logis?",
        "Apakah kamu bisa berpikir cepat saat berada dalam tekanan?",
        "Seberapa baik kamu memahami dan menjelaskan aturan hukum?",
        "Apakah kamu detail dan teliti dalam membuat dokumen hukum?",
        "Apakah kamu bisa menjaga rahasia klien dengan penuh tanggung jawab?",
        "Apakah kamu memiliki keberanian untuk membela pihak yang benar meskipun berat?",
        "Apakah kamu bisa membedakan antara logika hukum dan emosi pribadi?",
        "Apakah kamu punya kemampuan persuasi yang kuat?",
        "Apakah kamu mampu mengelola banyak kasus dengan waktu yang terbatas?",
        "Apakah kamu terus mengikuti perubahan hukum dan peraturan terbaru?"],

      "pilot": [
        "Apakah Anda merasa siap memikul tanggung jawab besar terhadap keselamatan penumpang?",
        "Apakah Anda bisa tetap tenang saat menghadapi situasi darurat di udara?",
        "Apakah Anda disiplin dalam mengikuti prosedur dan jadwal penerbangan?",
        "Apakah Anda selalu teliti saat memeriksa sistem dan rute sebelum terbang?",
        "Apakah Anda bisa memberikan respon cepat terhadap perubahan situasi saat terbang?",
        "Apakah Anda memiliki pengetahuan teknis mendalam tentang sistem pesawat?",
        "Apakah Anda mampu mempertahankan konsentrasi tinggi selama penerbangan?",
        "Apakah Anda dapat memimpin kru dan menjaga ketenangan penumpang dalam berbagai kondisi?",
        "Apakah Anda jujur dalam menyampaikan kondisi pesawat atau masalah teknis?",
        "Apakah keselamatan penumpang selalu menjadi prioritas utama bagi Anda?"],

      "chef": [
        "Apakah kamu tenang dalam tekanan?",
        "Apakah Anda selalu memastikan takaran dan teknik memasak dilakukan dengan tepat?", 
        "Apakah Anda tetap tangguh dan fokus meskipun bekerja di bawah tekanan dapur?",
        "Apakah Anda pandai mengatur waktu agar masakan matang dengan sempurna?",
        "Apakah Anda mampu bekerja sama dan berkoordinasi baik dengan staf dapur lain?",
        "Apakah Anda bisa menghasilkan masakan dengan rasa dan kualitas yang konsisten?",
        "Apakah Anda mampu mengerjakan banyak hidangan sekaligus dengan baik?",
        "Apakah Anda siap menjalani jam kerja yang panjang dan pekerjaan fisik berat?",
        "Apakah Anda sangat menjaga kebersihan dan standar keamanan makanan?",
        "Apakah Anda mampu memimpin tim dapur dan mengatur alur kerja secara efektif?"],
    };

    function masuk() {
      const namaInput = document.getElementById("nama").value.trim();
      if (namaInput === "") {
        alert("Nama tidak boleh kosong!");
        return;
      }
      namaUser = namaInput;
      document.getElementById("popup").classList.add("hidden");
      document.getElementById("konten").classList.remove("hidden");
      document.getElementById("sapaan").textContent = `Halo, ${namaUser}! 👋`;
    }

    function tanyaKarir() {
      document.getElementById("intro").classList.add("hidden");
      document.getElementById("formKarir").classList.remove("hidden");
    }

    function tampilkanPertanyaan() {
      const karir = document.getElementById("karir").value.trim().toLowerCase();
      const pertanyaan = databaseKarir[karir];
      if (!pertanyaan) {
        alert("Karier tidak ditemukan dalam database. Coba masukkan karier lain.");
        return;
      }

      currentKarir = karir;
      currentIndex = 0;
      jawabanUser = [];
      document.getElementById("formKarir").classList.add("hidden");
      document.getElementById("formPertanyaan").classList.remove("hidden");
      tampilkanSatuPertanyaan();
    }

    function tampilkanSatuPertanyaan() {
      const pertanyaan = databaseKarir[currentKarir];
      const container = document.getElementById("pertanyaanContainer");
      container.innerHTML = `
        <p class="mb-3 text-gray-800 text-lg font-medium">${pertanyaan[currentIndex]}</p>
        <div class="flex gap-4 justify-center">
          <button onclick="jawabPertanyaan(true)" class="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">Ya</button>
          <button onclick="jawabPertanyaan(false)" class="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition">Tidak</button>
        </div>
      `;
    }

    function jawabPertanyaan(jawaban) {
      jawabanUser.push(jawaban);
      currentIndex++;
      if (currentIndex < databaseKarir[currentKarir].length) {
        tampilkanSatuPertanyaan();
      } else {
        document.getElementById("formPertanyaan").classList.add("hidden");
        tampilkanHasil();
      }
    }

    function tampilkanHasil() {
      const skor = jawabanUser.filter(Boolean).length;
      const jumlah = databaseKarir[currentKarir].length;
      const hasil = document.getElementById("hasilKarir");

      if (skor === jumlah) {
        hasil.textContent = `Keren! Kamu sangat cocok menjadi seorang ${capitalize(currentKarir)}! 🎯`;
      } else if (skor >= jumlah / 2) {
        hasil.textContent = `Kamu cukup cocok menjadi ${capitalize(currentKarir)}. Mungkin bisa jadi pilihanmu!`;
      } else {
        hasil.textContent = `Sepertinya kamu belum cocok menjadi ${capitalize(currentKarir)}. Yuk eksplor karier lain!`;
      }

      document.getElementById("hasilContainer").classList.remove("hidden");
    }

    function kembaliKeKarir() {
      document.getElementById("karir").value = "";
      document.getElementById("hasilContainer").classList.add("hidden");
      document.getElementById("formKarir").classList.remove("hidden");
    }

    function capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1);
    }