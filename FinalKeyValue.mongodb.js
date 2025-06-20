use("toko")
db.obat_key.insertMany([
  {
    key: "obat:OB001",
    value: {
      kode_obat: "OB001",
      nama: "Paracetamol",
      stok: 100
    }
  },
  {
    key: "obat:OB002",
    value: {
      kode_obat: "OB002",
      nama: "Amoxicillin",
      stok: 75
    }
  },
  {
    key: "obat:OB003",
    value: {
      kode_obat: "OB003",
      nama: "Salbutamol",
      stok: 50
    }
  },
  {
    key: "obat:OB004",
    value: {
      kode_obat: "OB004",
      nama: "CTM",
      stok: 120
    }
  },
  {
    key: "obat:OB005",
    value: {
      kode_obat: "OB005",
      nama: "Ibuprofen",
      stok: 90
    }
  }
])
