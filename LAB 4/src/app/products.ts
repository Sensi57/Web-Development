export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 480_550,
    description: `диагональ экрана: 13.3 дюйм
    процессор: Apple M1 
    видеокарта: Apple M1 7 core
    размер оперативной памяти: 8 ГБ
    тип жесткого диска: SSD
    общий объем накопителей: 256 ГБ`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd3/he8/33125684772894/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 2,
    name: 'Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный',
    price: 389_897,
    description: `диагональ экрана: 15.6 дюйм
    процессор: Intel Core i5 11400H
    видеокарта: NVIDIA GeForce GTX 1650
    размер оперативной памяти: 16 ГБ
    тип жесткого диска: SSD
    общий объем накопителей: 512 ГБ`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg",
    url: "https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item",
    rating:4
  },
  {
    id: 3,
    name: 'Ноутбук Lenovo IdeaPad 3 15ITL6 82H8005GRK серебристый',
    price: 164_990,
    description: `диагональ экрана: 15.6 дюйм
    процессор: Intel Pentium Gold 7505
    видеокарта: Intel UHD Graphics
    размер оперативной памяти: 8 ГБ
    тип жесткого диска: SSD
    общий объем накопителей: 256 ГБ`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8f/h3a/66993674190878/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705-1.jpg",
    url: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h8005grk-serebristyi-108090705/?c=750000000#!/item",
    rating: 2
  },
  {
    id: 4,
    name: 'Ноутбук Apple MacBook Air 13 MGND3 золотистый',
    price: 498_000,
    description: `диагональ экрана: 13.3 дюйм
    процессор: Apple M1
    видеокарта: Apple M1 8 core
    размер оперативной памяти: 8 ГБ
    тип жесткого диска: SSD
    общий объем накопителей: 256 ГБ`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h54/33286638272542/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 5,
    name: 'Ноутбук ASUS TUF Gaming A15 FA506IHRB-HN084 90NR07G7-M008C0 черный',
    price: 369_990,
    description: `диагональ экрана: 15.6 дюйм
    процессор: AMD Ryzen 5 4600H
    видеокарта: nVidia GeForce GTX1650
    размер оперативной памяти: 8 ГБ
    тип жесткого диска: SSD
    общий объем накопителей: 512 ГБ`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg",
    url: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 6,
    name: 'Ноутбук Acer Nitro 5 AN515-45 NH.QB9ER.004 черный',
    price: 379_980,
    description: `диагональ экрана: 15.6 дюйм
    процессор: AMD Ryzen 5 5600H
    видеокарта: NVIDIA GeForce GTX 1650
    размер оперативной памяти: 8 ГБ
    тип жесткого диска: SSD
    общий объем накопителей: 512 ГБ`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h65/66626494398494/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784-1.jpg",
    url: "https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 7,
    name: 'Ноутбук HP 15s-fq5045ci 6K3C4EA серебристый',
    price: 365_900,
    description: `диагональ экрана: 15.6 дюйм
    процессор: Intel Core i5 1235U
    видеокарта: Intel Iris Xe
    размер оперативной памяти: 8 ГБ
    тип жесткого диска: SSD
    общий объем накопителей: 512 ГБ`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/h67/63141147574302/hp-15s-fq5045ci-6k3c4ea-serebristyj-106825696-1.jpg",
    url: "https://kaspi.kz/shop/p/hp-15s-fq5045ci-6k3c4ea-serebristyi-106825696/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 8,
    name: 'Ноутбук Lenovo IdeaPad 3 15IML05 81WB011TRK синий',
    price: 249_990,
    description: `диагональ экрана: 15.6 дюйм
    процессор: Intel Core i5-10210U
    видеокарта: Integrated Intel UHD Graphics
    размер оперативной памяти: 8 ГБ
    тип жесткого диска: SSD
    общий объем накопителей: 256 ГБ`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h01/63141544165406/lenovo-ideapad-3-15iml05-81wb011trk-sinij-106825926-1.jpg",
    url: "https://kaspi.kz/shop/p/lenovo-ideapad-3-15iml05-81wb011trk-sinii-106825926/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 9,
    name: 'Ноутбук ASUS ROG Strix G15 G513IH 90NR07P2-M00160 серый',
    price: 434_990,
    description: `диагональ экрана: 15.6 дюйм
    процессор: AMD Ryzen 7 4800H
    видеокарта: NVIDIA GeForce GTX 1650
    размер оперативной памяти: 8 ГБ
    тип жесткого диска: SSD
    общий объем накопителей: 512 ГБ`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/h89/34101177024542/asus-rog-strix-g15-g513ih-90nr07p2-m00160-seryj-101686597-1-Container.jpg",
    url: "https://kaspi.kz/shop/p/asus-rog-strix-g15-g513ih-90nr07p2-m00160-seryi-101686597/?c=750000000#!/item",
    rating: 5
  },
  {
    id: 10,
    name: 'Ноутбук ASUS VivoBook Pro K6500ZC-MA378 90NB0XK1-M00NE0 синий',
    price: 519_990,
    description: `диагональ экрана: 15.6 дюйм
    процессор: Intel Core i7-12700H
    видеокарта: NVIDIA GeForce RTX 3050
    размер оперативной памяти: 16 ГБ
    тип жесткого диска: SSD
    общий объем накопителей: 1000 ГБ`,
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/h80/67650749431838/asus-vivobook-pro-k6500zc-ma378-90nb0xk1-m00ne0-sinii-108345124-1.jpg",
    url: "https://kaspi.kz/shop/p/asus-vivobook-pro-k6500zc-ma378-90nb0xk1-m00ne0-sinii-108345124/?c=750000000#!/item",
    rating: 5
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/