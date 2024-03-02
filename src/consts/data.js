
import Equipmetn from "../model/equipment"
import nk1 from '../assets/knive-1.png'
import nk2 from '../assets/knive-2.webp'
import nk3 from '../assets/knive-3.jpg'
import nk4 from '../assets/knive-4.jpg'
import nk5 from '../assets/knives-5.jpg'
import nk6 from '../assets/knive-6.jpg'
import nk7 from '../assets/knive-7.jpg'
import nk8 from '../assets/knive-8.jpg'
import nk9 from '../assets/knive-9.jpg'


import s1 from '../assets/smart1.jpg'
import s2 from '../assets/smart2.jpg'
import s3 from '../assets/smart3.jpg'
import s4 from '../assets/smart4.jpg'
import s5 from '../assets/smart5.jpg'
import s6 from '../assets/smart6.webp'
import s7 from '../assets/smart7.webp'
import s8 from '../assets/smart8.webp'
import s9 from '../assets/smart9.webp'
import s10 from '../assets/smart10.webp'
import s11 from '../assets/smart11.webp'

import n1 from '../assets/new1.webp'
import n2 from '../assets/new2.webp'
import n3 from '../assets/new3.webp'
import n4 from '../assets/new4.webp'
import n5 from '../assets/new5.webp'

import su1 from '../assets/knive-1.png'
import su2 from '../assets/knives-5.jpg'
import su3 from '../assets/smart5.jpg'
import su4 from '../assets/smart6.webp'
import su5 from '../assets/smart9.webp'
import su6 from '../assets/new4.webp'
import su7 from '../assets/new5.webp'




const Data = {
    allEquipments : [
        new Equipmetn(1, 'Knive 1', 12.32, 18.00, nk1, 'Knives'),
        new Equipmetn(2, 'Knive 2', 11.02, 43.00, nk2, 'Knives'),
        new Equipmetn(3, 'Knive 3', 15.11, 19.00, nk3, 'Knives'),
        new Equipmetn(4, 'Knive 4', 32.5, 30.00, nk4, 'Knives'),
        new Equipmetn(5, 'Knive 5', 11.98, 38.00, nk5, 'Knives'),
        new Equipmetn(6, 'Knive 6', 83.00, 100.00, nk6, 'Knives'),
        new Equipmetn(7, 'Knive 7', 13.13, 33.00, nk7, 'Knives'),
        new Equipmetn(8, 'Knive 8', 56.98, 80.00, nk8, 'Knives'),
        new Equipmetn(9, 'Knive 9', 9.51, 16.00, nk9, 'Knives'),

        new Equipmetn(10, 'Eco Smart 1', 51.2, 141.00, s1, 'Smart'),
        new Equipmetn(11, 'Eco Smart 2', 125.36, 248.00, s2, 'Smart'),
        new Equipmetn(12, 'Eco Smart 3', 347.63, 622.00, s3, 'Smart'),
        new Equipmetn(13, 'Eco Smart 4', 247.35, 612.00, s4, 'Smart'),
        new Equipmetn(14, 'Eco Smart 5', 563.13, 358.00, s5, 'Smart'),
        new Equipmetn(15, 'Eco Smart 6', 132.55, 177.00, s6, 'Smart'),
        new Equipmetn(16, 'Eco Smart 7', 57.43, 120.7, s7, 'Smart'),
        new Equipmetn(17, 'Eco Smart 8', 34.78, 49.62, s8, 'Smart'),
        new Equipmetn(18, 'Eco Smart 9', 75.23, 72.00, s9, 'Smart'),
        new Equipmetn(19, 'Eco Smart 10', 62.53, 268.00, s10, 'Smart'),
        new Equipmetn(20, 'Eco Smart 11', 32.43, 100.90, s11, 'Smart'),

        new Equipmetn(21, 'New Stl 1', 17.27, 71.30, n1, 'New'),
        new Equipmetn(22, 'New Stl 2', 23.43, 84.73, n2, 'New'),
        new Equipmetn(23, 'New Stl 3', 73.73, 89.26, n3, 'New'),
        new Equipmetn(24, 'New Stl 4', 113.73, 258.83, n4, 'New'),
        new Equipmetn(25, 'New Stl 5', 137.26, 283.62, n5, 'New'),

        new Equipmetn(26, 'Knive 9', 113.46, 148.50, su1, 'Super'),
        new Equipmetn(27, 'Knive 6', 35.42, 538.25, su2, 'Super'),
        new Equipmetn(28, 'Eco Smart 5', 123.77, 338.62, su3, 'Super'),
        new Equipmetn(29, 'Eco Smart 6', 162.33, 358.58, su4, 'Super'),
        new Equipmetn(30, 'New Stl 4', 37.31, 53.51, su5, 'Super'),
        new Equipmetn(31, 'New Stl 6', 35.14, 75.95, su6, 'Super'),
        new Equipmetn(32, 'New Stl 2', 146.27, 258.30, su7, 'Super'),
    ],
    MyBag:[]
}


export default Data;