import React from 'react'

function SalonServices() {
  return (
    <section className="max-w-xl">
      <h2 className="text-center text-3xl py-4 text-red-800">Layanan Salon</h2>
      <ul className="max-w-6xl grid grid-cols-1 grid-rows-1 gap-2 text-center mx-auto">
        
        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Cuci, Potong & Gaya</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp50.000</p>
          </div>
          <p>Potongan rambut gaya panjang dengan pengeringan dan penataan.</p>
        </div>
        
        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Potong Salon - Anak 13 Tahun ke Bawah</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp25.000</p>
          </div>
          <p>Potongan rambut gaya panjang dengan pengeringan dan penataan cepat.</p>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Potong Poni</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp50.000</p>
          </div>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Cuci & Blowdry</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp60.000</p>
          </div>
          <p>Rp15.000/menit</p>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Cuci, Potong & Gaya - Rambut Keriting</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp90.000</p>
          </div>
          <p>Jika nama Anda Eva, potongan rambut ini GRATIS 100%.</p>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Potong Kering - Rambut Keriting</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp75.000</p>
          </div>
        </div>
      </ul>
    </section>
  )
}

export default SalonServices
