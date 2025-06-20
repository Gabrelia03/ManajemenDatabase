use("toko")
db.obat_wide.insertMany([
  {
    id: 1,
    nama: "Andi",
    kota: "Makassar",
    umur: 21,
    hobi: ["membaca", "berenang"]
  },
  {
    id: 2,
    nama: "Budi",
    kota: "Manado",
    umur: 25
  },
  {
    id: 3,
    nama: "Citra",
    kota: "Palu",
    umur: 23,
    pekerjaan: "Mahasiswa"
  },
  {
    id: 4,
    nama: "Dedi",
    kota: "Mamuju",
    umur: 22,
    status: "Aktif"
  },
  {
    id: 5,
    nama: "Eka",
    kota: "Kendari",
    umur: 24,
    minat: ["Teknologi", "Seni"]
  }
])
