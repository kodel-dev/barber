function BarberServices() {
  return (
    <section className="max-w-xl">
      <h2 className="text-center text-3xl py-4 text-red-800">Layanan Barber</h2>
      <ul className="max-w-6xl grid grid-cols-1 grid-rows-1 gap-2 text-center mx-auto">
        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Basic Haircut</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp35.000
</p>
          </div>
          <p>Potongan standar dengan teknik rapi dan presisi. Cocok untuk gaya clean dan formal</p>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Fade Cut (Low / Mid / High)</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp45.000</p>
          </div>
          <p>Gradasi halus untuk tampilan lebih modern dan maskulin</p>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Undercut Style</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp45.000</p>
          </div>
          <p>Potongan tajam dan stylish untuk kamu yang berani tampil beda.</p>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Classic Pompadour / Slickback</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp50.000</p>
          </div>
          <p>Gaya klasik yang elegan dengan sentuhan modern, termasuk styling pomade.</p>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Kids Haircut (≤ 12 Tahun)</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp25.000</p>
          </div>
           <p>Potongan lucu dan nyaman untuk anak-anak, oleh barber yang sabar dan telaten.</p>
        </div>

        <div className="text-left">
          <div className="flex items-end">
            <h2 className="font-bold min-w-fit">Shaving / Beard Trim</h2>
            <div className="h-px w-full mb-1 bg-neutral-400"></div>
            <p>Rp25.000</p>
          </div>
          <p>Cukur jenggot/kumis rapi dengan pisau steril dan teknik presisi.</p>
        </div>
      </ul>
    </section>
  );
}

export default BarberServices;
