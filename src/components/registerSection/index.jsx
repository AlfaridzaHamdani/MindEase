import React from "react";
import "./styles.scss";

const index = () => {
  return (
    <div className="registration-form">
      <h1>Pendaftaran Konseling</h1>
      <div className="progress-bar">
        <div className="step completed">Paket</div>
        <div className="step active">Profil</div>
        <div className="step">Pembayaran</div>
      </div>
      <div className="login-prompt">
        Sudah punya akun? <a href="#">Klik di sini untuk masuk</a>
      </div>
      <form className="form">
        <div className="form-group">
          <input type="text" placeholder="Nama Lengkap" />
          <div className="input-group">
            <select defaultValue="+62">
              <option value="+62">+62</option>
              {/* Add more country codes as needed */}
            </select>
            <input type="text" placeholder="Nomor WhatsApp" />
          </div>
        </div>
        <div className="form-group">
          <select>
            <option>Jenis Kelamin</option>
            <option value="male">Laki-laki</option>
            <option value="female">Perempuan</option>
          </select>
          <div className="input-group">
            <select>
              <option>Tanggal</option>
              {/* Add day options */}
            </select>
            <select>
              <option>Bulan</option>
              {/* Add month options */}
            </select>
            <select>
              <option>Tahun</option>
              {/* Add year options */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" />
          <input
            type="password"
            placeholder="Buat Password (minimal 5 karakter)"
          />
        </div>
        <div className="form-group">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">Pastikan email kamu sudah benar</label>
        </div>
        <p className="note">
          Harap isi data dirimu dengan benar <br />
          Registrasi akun Satu Persen diperlukan untuk memilih jadwal
          konsultasi.
        </p>
        <button type="submit" className="submit-button">
          Lanjut
        </button>
      </form>
    </div>
  );
};

export default index;
