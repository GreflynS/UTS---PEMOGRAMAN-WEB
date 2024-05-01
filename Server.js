const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer'); // Middleware untuk mengelola upload file

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let userProfile = {}; // Simpan data pengguna di sini
const upload = multer({ dest: 'uploads/' }); // Simpan file upload di folder uploads

// Endpoint untuk menangani pendaftaran pengguna
app.post('/signup', upload.single('file'), (req, res) => {
    const userData = req.body; // Ambil data pengguna dari formulir
    userData.profilePicture = req.file.filename; // Simpan nama file foto profil
    // Simpan data pengguna ke dalam objek userProfile atau database
    userProfile = userData;
    res.redirect('/profile'); // Redirect ke halaman profil
});

// Endpoint untuk memberikan data pengguna ke halaman profil
app.get('/user-data', (req, res) => {
    res.json(userProfile);
});

// Tampilkan halaman profil
app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/public/profile.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
