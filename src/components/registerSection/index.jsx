import React from "react";
import "./styles.scss";

const RegisterForm = ({ handleStepChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleStepChange(3);
  };

  return (
    <div className="registration-form">
      <div className="login-prompt">
        Sudah punya akun? <a href="#">Klik di sini untuk masuk</a>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Nama Lengkap" required />
          <div className="input-group">
            <select defaultValue="+62" required>
              <option value="+62">+62</option>
              {/* Add more country codes as needed */}
            </select>
            <input type="text" placeholder="Nomor WhatsApp" required />
          </div>
        </div>
        <div className="form-group">
          <select required>
            <option>Jenis Kelamin</option>
            <option value="male">Laki-laki</option>
            <option value="female">Perempuan</option>
          </select>
          <div className="input-group">
            <select required>
              <option>Tanggal</option>
              {/* Add day options */}
            </select>
            <select required>
              <option>Bulan</option>
              {/* Add month options */}
            </select>
            <select required>
              <option>Tahun</option>
              {/* Add year options */}
            </select>
          </div>
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" required />
          <input
            type="password"
            placeholder="Buat Password (minimal 5 karakter)"
            required
            minLength="5"
          />
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

export default RegisterForm;
