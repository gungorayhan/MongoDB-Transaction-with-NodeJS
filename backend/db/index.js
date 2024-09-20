const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoUri = "mongodb://root:example@mongo:27017/mydatabase?authSource=admin&replicaSet=rs0";

    mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true, // Güvenlik için index oluşturma yönetimi
        // useFindAndModify: false, // Güvenlik nedeniyle deprecated fonksiyonları devre dışı bırakıyoruz
    })
    .then(() => console.log('MongoDB bağlantısı başarılı'))
    .catch(err => console.error('MongoDB bağlantı hatası:', err));
};

module.exports = connectDB;