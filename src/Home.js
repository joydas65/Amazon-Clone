import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Amazon Prime Banner" />

                <div className="home_row">
                    <Product id="12321341" title="TCL 108 cm (43 inches) Full HD Certified Android Smart LED TV 43S6500FS (Black) (2020 Model), Connectivity : 3 HDMI ports to connect set top box, Blue Ray players | 1 USB ports to connect hard drives and other USB devices" price={5000} image="https://images-na.ssl-images-amazon.com/images/I/71KyDrKMKyL._SL1500_.jpg" rating={5} />
                    <Product id="12321342" title="OnePlus 8 Pro (Ultramarine Blue 12GB RAM+256GB Storage), 48MP rear camera with 4k video at 30/60 fps, 1080p video, 17.22 centimeters (6.78-inch) 120Hz fluid display with 3168 x 1440 pixels resolution, Memory, Storage & SIM: 12GB RAM | 256GB internal memory | Dual SIM (nano+nano) dual-standby (5G+5G)" price={239.00} image="https://images-eu.ssl-images-amazon.com/images/I/41uo1mSh54L._AC_US400_FMwebp_QL65_.jpg" rating={4} />
                </div>

                <div className="home_row">
                    <Product id="12321343" title="Acer Nitro 5 Intel Core i5-10th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop (8GB Ram/1TB HDD + 256GB SSD/Windows 10 Home/GTX 1650Ti Graphics/Obsidian Black/2.3 Kgs), AN515-55" price={1000} image="https://images-na.ssl-images-amazon.com/images/I/71%2BkGr%2B5LrL._SL1500_.jpg" rating={5}/>
                    <Product id="12321344" title="D3D Smart Pan Tilt Home Security WiFi Camera | Wireless Indoor Security 360° 2 0Mp 1080P (Full HD) | Up to 30 Ft Night Vision | Micro SD Card Slot 8X Zoom | Support Fire Gas Door Sensors (F1-362C)" price={39.99} image="https://images-na.ssl-images-amazon.com/images/I/51FVgdlpvZL._SL1100_.jpg" rating={4}/>
                    <Product id="12321345" title="Extremely lightweight material, these are nice shoes for everyday use, or wedding .this unique design and stylish shoes are to maximize your fashion." price={14.99} image="https://images-na.ssl-images-amazon.com/images/I/61UPUDphtXL._UL1500_.jpg" rating={5}/>
                </div>

                <div className="home_row">
                    <Product id="12321346" title="Sound Boss SB-2032 Car FM/USB/SD/AUX/Bluetooth Player, Support FM Radio/BLUETOOTH/ USB / SD Control. Auxillary Input, Remote Control, 18 Preset Radio Memory, Warranty : 6 Months" price={7.99} image="https://images-na.ssl-images-amazon.com/images/I/81tMDskHYbL._SL1500_.jpg" rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home;
