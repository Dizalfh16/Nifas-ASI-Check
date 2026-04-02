'use client';

import { useState } from 'react';
import Link from 'next/link';

// Dummy Data
const nakesData = [
  { id: 1, name: "Bidan Siti Aminah, S.Tr.Keb", city: "Tasikmalaya", clinic: "Klinik Bersalin Bunda Sehat", phone: "6281234567890" },
  { id: 2, name: "Bidan Rahmawati, A.Md.Keb", city: "Tasikmalaya", clinic: "Praktik Mandiri Bidan Ria", phone: "6289876543210" },
  { id: 3, name: "Bidan Kadek Arini, S.Tr.Keb", city: "Denpasar", clinic: "Rumah Bersalin Kasih Ibu", phone: "628888888888" },
  { id: 4, name: "Dr. Farah Diba, Sp.OG", city: "Jakarta Selatan", clinic: "RSIA Asih JKT", phone: "62811111111" },
  { id: 5, name: "Bidan Nurul Hidayah, A.Md.Keb", city: "Bandung", clinic: "PMB Mawar Putih", phone: "62822222222" },
  { id: 6, name: "Bidan Dewi Sartika", city: "Bandung", clinic: "Klinik Ibu & Anak Parahyangan", phone: "62833333333" },
  { id: 7, name: "Bidan Lisa Kusuma, S.Tr.Keb", city: "Surabaya", clinic: "PMB Permata Hati", phone: "62844444444" },
  { id: 8, name: "Bidan Sinta Wijaya", city: "Semarang", clinic: "Bidan Praktik Mandiri Sinta", phone: "62855555555" },
  { id: 9, name: "Bidan Yuliati, S.ST", city: "Medan", clinic: "Klinik Sehat Bersama", phone: "62866666666" },
  { id: 10, name: "Sri Mulyani, A.Md.Keb", city: "Yogyakarta", clinic: "RB Bidan Sri", phone: "62877777777" },
  { id: 11, name: "Bidan Tari", city: "Tasikmalaya", clinic: "Klinik Pratama Lestari", phone: "628123123123" },
  { id: 12, name: "Ratna Sari, A.Md.Keb", city: "Tasikmalaya", clinic: "PMB Ratna", phone: "628321321321" },
  { id: 13, name: "Bidan Winda, S.Tr.Keb", city: "Malang", clinic: "Rumah Bersalin Melati Malang", phone: "628456456456" },
  { id: 14, name: "Lestari Ayu", city: "Makassar", clinic: "Bidan Andalan Makassar", phone: "628654654654" },
  { id: 15, name: "Bidan Anisa Fitri", city: "Depok", clinic: "PMB Anisa", phone: "628789789789" },
  { id: 16, name: "Dr. Maya Shafira, Sp.OG", city: "Tangerang", clinic: "RSIA Bina Medika", phone: "628987987987" },
  { id: 17, name: "Bidan Ningsih, A.Md.Keb", city: "Bekasi", clinic: "Klinik Ningsih Medika", phone: "628111222333" },
  { id: 18, name: "Bidan Ayu Kusumaningrum", city: "Solo", clinic: "RB Sejahtera Solo", phone: "628222333444" },
  { id: 19, name: "Bidan Rina Gunawan", city: "Palembang", clinic: "Praktik Bidan Rina", phone: "628333444555" },
  { id: 20, name: "Bidan Fatimah Azzahra", city: "Jakarta Timur", clinic: "Bina Harapan Jaktim", phone: "628444555666" },
];

export default function Direktori() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredNakes = nakesData.filter(nakes => 
    nakes.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    nakes.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nakes.clinic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in" style={{ maxWidth: '950px', margin: '0 auto', paddingBottom: '30px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-light)', textDecoration: 'none', marginBottom: '15px', fontWeight: 500, padding: '8px 16px', background: 'rgba(255,255,255,0.5)', borderRadius: '20px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 4px 10px rgba(0,0,0,0.03)', transition: 'all 0.2s' }}>
        <span style={{ fontSize: '1.2rem' }}>←</span> Kembali ke Beranda
      </Link>

      <div className="text-center mb-4">
        <h1 style={{ color: 'var(--primary)' }}>Direktori Bidan & Nakes 👩‍⚕️</h1>
        <p style={{ color: 'var(--text-light)' }}>Temukan tenaga kesehatan profesional terdekat di kota Anda untuk konsultasi lebih lanjut.</p>
      </div>

      <div className="glass-card hover-lift" style={{ marginBottom: '30px', padding: '20px' }}>
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', fontSize: '1.2rem' }}>🔍</span>
          <input 
            type="text" 
            placeholder="Cari spesifik nama bidan, kota (contoh: Tasikmalaya), atau klinik..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '16px 20px 16px 55px', 
              borderRadius: '50px', 
              border: '2px solid var(--glass-border)', 
              background: 'rgba(255, 255, 255, 0.7)',
              fontSize: '1rem',
              color: 'var(--text-main)',
              outline: 'none',
              fontFamily: 'inherit',
              transition: 'var(--transition)'
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredNakes.length > 0 ? (
          filteredNakes.map((nakes) => (
            <div key={nakes.id} className="glass-card hover-lift" style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF85A2, #A3D8F4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'white', flexShrink: 0 }}>
                  {nakes.name.includes("Dr") ? "🧑‍⚕️" : "👩‍⚕️"}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', margin: 0, color: 'var(--text-main)', lineHeight: 1.3 }}>{nakes.name}</h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-light)', marginTop: '4px' }}>📍 {nakes.city}</p>
                </div>
              </div>
              
              <div style={{ background: 'rgba(255,255,255,0.5)', padding: '10px 15px', borderRadius: '10px', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                🏥 {nakes.clinic}
              </div>
              
              <a 
                href={`https://wa.me/${nakes.phone}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary" 
                style={{ marginTop: 'auto', width: '100%', display: 'flex', gap: '8px', padding: '12px', justifyContent: 'center', fontSize: '0.95rem' }}
              >
                <span>💬</span> Hubungi WhatsApp
              </a>
            </div>
          ))
        ) : (
          <div className="glass-card" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🥺</div>
            <h3 style={{ margin: '0 0 10px' }}>Yahh... Nakes tidak ditemukan</h3>
            <p style={{ margin: 0, color: 'var(--text-light)' }}>Coba gunakan kata kunci nama kota atau klinik lain.</p>
          </div>
        )}
      </div>

    </div>
  );
}
