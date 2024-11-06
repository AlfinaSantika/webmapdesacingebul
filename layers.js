var wms_layers = [];

var format_gadm41_IDNADM_ADM_4_0 = new ol.format.GeoJSON();
var features_gadm41_IDNADM_ADM_4_0 = format_gadm41_IDNADM_ADM_4_0.readFeatures(json_gadm41_IDNADM_ADM_4_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_IDNADM_ADM_4_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_IDNADM_ADM_4_0.addFeatures(features_gadm41_IDNADM_ADM_4_0);
var lyr_gadm41_IDNADM_ADM_4_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_IDNADM_ADM_4_0, 
                style: style_gadm41_IDNADM_ADM_4_0,
                popuplayertitle: "gadm41_IDN — ADM_ADM_4",
                interactive: true,
    title: 'gadm41_IDN — ADM_ADM_4<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_0_0.png" /> Cingebul<br />\
    <img src="styles/legend/gadm41_IDNADM_ADM_4_0_1.png" /> <br />'
        });
var format_Rw_1 = new ol.format.GeoJSON();
var features_Rw_1 = format_Rw_1.readFeatures(json_Rw_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rw_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rw_1.addFeatures(features_Rw_1);
var lyr_Rw_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rw_1, 
                style: style_Rw_1,
                popuplayertitle: "Rw",
                interactive: true,
    title: 'Rw<br />\
    <img src="styles/legend/Rw_1_0.png" /> RW 1<br />\
    <img src="styles/legend/Rw_1_1.png" /> RW 9<br />\
    <img src="styles/legend/Rw_1_2.png" /> <br />\
    <img src="styles/legend/Rw_1_3.png" /> RW 2<br />\
    <img src="styles/legend/Rw_1_4.png" /> RW 3<br />\
    <img src="styles/legend/Rw_1_5.png" /> RW 4<br />\
    <img src="styles/legend/Rw_1_6.png" /> RW 5<br />\
    <img src="styles/legend/Rw_1_7.png" /> RW 6<br />\
    <img src="styles/legend/Rw_1_8.png" /> RW 7<br />\
    <img src="styles/legend/Rw_1_9.png" /> RW 8<br />'
        });
var format_Sawah_2 = new ol.format.GeoJSON();
var features_Sawah_2 = format_Sawah_2.readFeatures(json_Sawah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawah_2.addFeatures(features_Sawah_2);
var lyr_Sawah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sawah_2, 
                style: style_Sawah_2,
                popuplayertitle: "Sawah",
                interactive: true,
    title: 'Sawah<br />\
    <img src="styles/legend/Sawah_2_0.png" /> Sawah Cingebul<br />\
    <img src="styles/legend/Sawah_2_1.png" /> <br />'
        });
var format_Pinusan_3 = new ol.format.GeoJSON();
var features_Pinusan_3 = format_Pinusan_3.readFeatures(json_Pinusan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pinusan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pinusan_3.addFeatures(features_Pinusan_3);
var lyr_Pinusan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pinusan_3, 
                style: style_Pinusan_3,
                popuplayertitle: "Pinusan",
                interactive: true,
    title: 'Pinusan<br />\
    <img src="styles/legend/Pinusan_3_0.png" /> Pinusan<br />\
    <img src="styles/legend/Pinusan_3_1.png" /> <br />'
        });
var format_Clipped_4 = new ol.format.GeoJSON();
var features_Clipped_4 = format_Clipped_4.readFeatures(json_Clipped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_4.addFeatures(features_Clipped_4);
var lyr_Clipped_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_4, 
                style: style_Clipped_4,
                popuplayertitle: "Clipped",
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_4_0.png" /> residential<br />\
    <img src="styles/legend/Clipped_4_1.png" /> service<br />\
    <img src="styles/legend/Clipped_4_2.png" /> tertiary<br />\
    <img src="styles/legend/Clipped_4_3.png" /> <br />'
        });
var format_Clipped_5 = new ol.format.GeoJSON();
var features_Clipped_5 = format_Clipped_5.readFeatures(json_Clipped_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_5.addFeatures(features_Clipped_5);
var lyr_Clipped_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_5, 
                style: style_Clipped_5,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_5.png" /> Clipped'
            });
var format_Clipped_6 = new ol.format.GeoJSON();
var features_Clipped_6 = format_Clipped_6.readFeatures(json_Clipped_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_6.addFeatures(features_Clipped_6);
var lyr_Clipped_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_6, 
                style: style_Clipped_6,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_6.png" /> Clipped'
            });
var format_RTDusunKarangReja_7 = new ol.format.GeoJSON();
var features_RTDusunKarangReja_7 = format_RTDusunKarangReja_7.readFeatures(json_RTDusunKarangReja_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTDusunKarangReja_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTDusunKarangReja_7.addFeatures(features_RTDusunKarangReja_7);
var lyr_RTDusunKarangReja_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTDusunKarangReja_7, 
                style: style_RTDusunKarangReja_7,
                popuplayertitle: "RT Dusun Karang Reja",
                interactive: true,
    title: 'RT Dusun Karang Reja<br />\
    <img src="styles/legend/RTDusunKarangReja_7_0.png" /> RT 01 Dusun Karang Reja<br />\
    <img src="styles/legend/RTDusunKarangReja_7_1.png" /> RT 02 Dusun Karang Reja<br />\
    <img src="styles/legend/RTDusunKarangReja_7_2.png" /> RT 03 Dusun Karang Reja<br />\
    <img src="styles/legend/RTDusunKarangReja_7_3.png" /> <br />'
        });
var format_RTDusunPurbaketa_8 = new ol.format.GeoJSON();
var features_RTDusunPurbaketa_8 = format_RTDusunPurbaketa_8.readFeatures(json_RTDusunPurbaketa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTDusunPurbaketa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTDusunPurbaketa_8.addFeatures(features_RTDusunPurbaketa_8);
var lyr_RTDusunPurbaketa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTDusunPurbaketa_8, 
                style: style_RTDusunPurbaketa_8,
                popuplayertitle: "RT Dusun Purbaketa",
                interactive: true,
    title: 'RT Dusun Purbaketa<br />\
    <img src="styles/legend/RTDusunPurbaketa_8_0.png" /> RT 01 Dusun Purbaketa<br />\
    <img src="styles/legend/RTDusunPurbaketa_8_1.png" /> RT 02 Dusun Purbaketa<br />\
    <img src="styles/legend/RTDusunPurbaketa_8_2.png" /> RT 03 Dusun Purbaketa<br />\
    <img src="styles/legend/RTDusunPurbaketa_8_3.png" /> <br />\
    <img src="styles/legend/RTDusunPurbaketa_8_4.png" /> RT 04 Dusun Purbaketa<br />\
    <img src="styles/legend/RTDusunPurbaketa_8_5.png" /> RT 05 Dusun Purbaketa<br />'
        });
var format_RTDusunCilutung_9 = new ol.format.GeoJSON();
var features_RTDusunCilutung_9 = format_RTDusunCilutung_9.readFeatures(json_RTDusunCilutung_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTDusunCilutung_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTDusunCilutung_9.addFeatures(features_RTDusunCilutung_9);
var lyr_RTDusunCilutung_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTDusunCilutung_9, 
                style: style_RTDusunCilutung_9,
                popuplayertitle: "RT Dusun Cilutung",
                interactive: true,
    title: 'RT Dusun Cilutung<br />\
    <img src="styles/legend/RTDusunCilutung_9_0.png" /> RT 01 Dusun Cilutung<br />\
    <img src="styles/legend/RTDusunCilutung_9_1.png" /> RT 02 Dusun Cilutung<br />\
    <img src="styles/legend/RTDusunCilutung_9_2.png" /> <br />'
        });
var format_KantorDesaCingebul_10 = new ol.format.GeoJSON();
var features_KantorDesaCingebul_10 = format_KantorDesaCingebul_10.readFeatures(json_KantorDesaCingebul_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorDesaCingebul_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorDesaCingebul_10.addFeatures(features_KantorDesaCingebul_10);
var lyr_KantorDesaCingebul_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorDesaCingebul_10, 
                style: style_KantorDesaCingebul_10,
                popuplayertitle: "Kantor Desa Cingebul",
                interactive: true,
                title: '<img src="styles/legend/KantorDesaCingebul_10.png" /> Kantor Desa Cingebul'
            });
var format_Lapangan_11 = new ol.format.GeoJSON();
var features_Lapangan_11 = format_Lapangan_11.readFeatures(json_Lapangan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_11.addFeatures(features_Lapangan_11);
var lyr_Lapangan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_11, 
                style: style_Lapangan_11,
                popuplayertitle: "Lapangan ",
                interactive: true,
    title: 'Lapangan <br />\
    <img src="styles/legend/Lapangan_11_0.png" /> Lapangan Desa Cingebul<br />\
    <img src="styles/legend/Lapangan_11_1.png" /> <br />'
        });
var format_RTDusunPenusupan_12 = new ol.format.GeoJSON();
var features_RTDusunPenusupan_12 = format_RTDusunPenusupan_12.readFeatures(json_RTDusunPenusupan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTDusunPenusupan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTDusunPenusupan_12.addFeatures(features_RTDusunPenusupan_12);
var lyr_RTDusunPenusupan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTDusunPenusupan_12, 
                style: style_RTDusunPenusupan_12,
                popuplayertitle: "RT Dusun Penusupan",
                interactive: true,
    title: 'RT Dusun Penusupan<br />\
    <img src="styles/legend/RTDusunPenusupan_12_0.png" /> RT 01 Dusun Penusupan<br />\
    <img src="styles/legend/RTDusunPenusupan_12_1.png" /> RT 02 Dusun Penusupan<br />\
    <img src="styles/legend/RTDusunPenusupan_12_2.png" /> <br />'
        });
var format_RTDusunCikoas_13 = new ol.format.GeoJSON();
var features_RTDusunCikoas_13 = format_RTDusunCikoas_13.readFeatures(json_RTDusunCikoas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTDusunCikoas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTDusunCikoas_13.addFeatures(features_RTDusunCikoas_13);
var lyr_RTDusunCikoas_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTDusunCikoas_13, 
                style: style_RTDusunCikoas_13,
                popuplayertitle: "RT Dusun Cikoas",
                interactive: true,
    title: 'RT Dusun Cikoas<br />\
    <img src="styles/legend/RTDusunCikoas_13_0.png" /> RT 01 Dusun Cikoas<br />\
    <img src="styles/legend/RTDusunCikoas_13_1.png" /> RT 02 Dusun Cikoas<br />\
    <img src="styles/legend/RTDusunCikoas_13_2.png" /> RT 03 Dusun Cikoas<br />\
    <img src="styles/legend/RTDusunCikoas_13_3.png" /> <br />'
        });
var format_RTDusunCingebulPengasinan_14 = new ol.format.GeoJSON();
var features_RTDusunCingebulPengasinan_14 = format_RTDusunCingebulPengasinan_14.readFeatures(json_RTDusunCingebulPengasinan_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTDusunCingebulPengasinan_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTDusunCingebulPengasinan_14.addFeatures(features_RTDusunCingebulPengasinan_14);
var lyr_RTDusunCingebulPengasinan_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTDusunCingebulPengasinan_14, 
                style: style_RTDusunCingebulPengasinan_14,
                popuplayertitle: "RT Dusun Cingebul Pengasinan",
                interactive: true,
    title: 'RT Dusun Cingebul Pengasinan<br />\
    <img src="styles/legend/RTDusunCingebulPengasinan_14_0.png" /> RT 01 Dusun Cingebul Pengasinan<br />\
    <img src="styles/legend/RTDusunCingebulPengasinan_14_1.png" /> RT 02 Dusun Cingebul Pengasinan<br />\
    <img src="styles/legend/RTDusunCingebulPengasinan_14_2.png" /> <br />'
        });
var format_RTDusunWanasriKarangBawang_15 = new ol.format.GeoJSON();
var features_RTDusunWanasriKarangBawang_15 = format_RTDusunWanasriKarangBawang_15.readFeatures(json_RTDusunWanasriKarangBawang_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTDusunWanasriKarangBawang_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTDusunWanasriKarangBawang_15.addFeatures(features_RTDusunWanasriKarangBawang_15);
var lyr_RTDusunWanasriKarangBawang_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTDusunWanasriKarangBawang_15, 
                style: style_RTDusunWanasriKarangBawang_15,
                popuplayertitle: "RT Dusun Wanasri KarangBawang",
                interactive: true,
    title: 'RT Dusun Wanasri KarangBawang<br />\
    <img src="styles/legend/RTDusunWanasriKarangBawang_15_0.png" />  RT 02 Dusun Wanasri-KarangBawang<br />\
    <img src="styles/legend/RTDusunWanasriKarangBawang_15_1.png" /> RT 01 Dusun Wanasri-KarangBawang<br />\
    <img src="styles/legend/RTDusunWanasriKarangBawang_15_2.png" /> <br />\
    <img src="styles/legend/RTDusunWanasriKarangBawang_15_3.png" /> RT 02 Dusun Wanasri-KarangBawang<br />'
        });
var format_Pendidikan_16 = new ol.format.GeoJSON();
var features_Pendidikan_16 = format_Pendidikan_16.readFeatures(json_Pendidikan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_16.addFeatures(features_Pendidikan_16);
var lyr_Pendidikan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_16, 
                style: style_Pendidikan_16,
                popuplayertitle: "Pendidikan",
                interactive: true,
    title: 'Pendidikan<br />\
    <img src="styles/legend/Pendidikan_16_0.png" /> SDN 01 Cingebul<br />\
    <img src="styles/legend/Pendidikan_16_1.png" /> SDN 02 Cingebul<br />\
    <img src="styles/legend/Pendidikan_16_2.png" /> SDN 03 Cingebul<br />\
    <img src="styles/legend/Pendidikan_16_3.png" /> SDN 04 Cingebul<br />\
    <img src="styles/legend/Pendidikan_16_4.png" /> SDN 05 Cingebul<br />\
    <img src="styles/legend/Pendidikan_16_5.png" /> SMP PGRI Lumbir<br />\
    <img src="styles/legend/Pendidikan_16_6.png" /> TK Pertiwi 2 Cingebul<br />\
    <img src="styles/legend/Pendidikan_16_7.png" /> <br />'
        });
var format_Kuburan_17 = new ol.format.GeoJSON();
var features_Kuburan_17 = format_Kuburan_17.readFeatures(json_Kuburan_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_17.addFeatures(features_Kuburan_17);
var lyr_Kuburan_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_17, 
                style: style_Kuburan_17,
                popuplayertitle: "Kuburan",
                interactive: true,
    title: 'Kuburan<br />\
    <img src="styles/legend/Kuburan_17_0.png" /> TPU Karang Bawang<br />\
    <img src="styles/legend/Kuburan_17_1.png" /> <br />\
    <img src="styles/legend/Kuburan_17_2.png" /> TPU Wanasri<br />'
        });
var format_MusholaMasjid_18 = new ol.format.GeoJSON();
var features_MusholaMasjid_18 = format_MusholaMasjid_18.readFeatures(json_MusholaMasjid_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MusholaMasjid_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MusholaMasjid_18.addFeatures(features_MusholaMasjid_18);
var lyr_MusholaMasjid_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MusholaMasjid_18, 
                style: style_MusholaMasjid_18,
                popuplayertitle: "Mushola & Masjid",
                interactive: true,
    title: 'Mushola & Masjid<br />\
    <img src="styles/legend/MusholaMasjid_18_0.png" /> Masjid Baiturrahim<br />\
    <img src="styles/legend/MusholaMasjid_18_1.png" /> Masjid Nurul Huda<br />\
    <img src="styles/legend/MusholaMasjid_18_2.png" /> Mushola Al Muttaqin<br />\
    <img src="styles/legend/MusholaMasjid_18_3.png" /> Mushola At-Takwa<br />\
    <img src="styles/legend/MusholaMasjid_18_4.png" /> Mushola Darull Hikmah<br />\
    <img src="styles/legend/MusholaMasjid_18_5.png" /> Musholla Al Huda<br />\
    <img src="styles/legend/MusholaMasjid_18_6.png" /> <br />'
        });
var format_Jalanbesar_19 = new ol.format.GeoJSON();
var features_Jalanbesar_19 = format_Jalanbesar_19.readFeatures(json_Jalanbesar_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalanbesar_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalanbesar_19.addFeatures(features_Jalanbesar_19);
var lyr_Jalanbesar_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalanbesar_19, 
                style: style_Jalanbesar_19,
                popuplayertitle: "Jalan besar ",
                interactive: true,
    title: 'Jalan besar <br />\
    <img src="styles/legend/Jalanbesar_19_0.png" /> JL Lumbir - Karangpucung<br />\
    <img src="styles/legend/Jalanbesar_19_1.png" /> Jl.Bongas<br />\
    <img src="styles/legend/Jalanbesar_19_2.png" /> <br />\
    <img src="styles/legend/Jalanbesar_19_3.png" /> Jl.Karang Bawang<br />'
        });
var format_RumahSaya_20 = new ol.format.GeoJSON();
var features_RumahSaya_20 = format_RumahSaya_20.readFeatures(json_RumahSaya_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSaya_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSaya_20.addFeatures(features_RumahSaya_20);
var lyr_RumahSaya_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahSaya_20, 
                style: style_RumahSaya_20,
                popuplayertitle: "Rumah Saya",
                interactive: true,
    title: 'Rumah Saya<br />\
    <img src="styles/legend/RumahSaya_20_0.png" /> Rumah Saya<br />\
    <img src="styles/legend/RumahSaya_20_1.png" /> <br />'
        });
var format_RumahRtRw_21 = new ol.format.GeoJSON();
var features_RumahRtRw_21 = format_RumahRtRw_21.readFeatures(json_RumahRtRw_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahRtRw_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahRtRw_21.addFeatures(features_RumahRtRw_21);
var lyr_RumahRtRw_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahRtRw_21, 
                style: style_RumahRtRw_21,
                popuplayertitle: "Rumah Rt & Rw",
                interactive: true,
    title: 'Rumah Rt & Rw<br />\
    <img src="styles/legend/RumahRtRw_21_0.png" /> Rumah Ketua Rt 01 Dusun Cikoas<br />\
    <img src="styles/legend/RumahRtRw_21_1.png" /> Rumah Ketua Rt 01 Dusun Cilutung<br />\
    <img src="styles/legend/RumahRtRw_21_2.png" /> Rumah Ketua Rt 01 Dusun Cingebul Pengasinan<br />\
    <img src="styles/legend/RumahRtRw_21_3.png" /> Rumah Ketua Rt 01 Dusun Karang Reja<br />\
    <img src="styles/legend/RumahRtRw_21_4.png" /> Rumah Ketua Rt 01 Dusun Penusupan<br />\
    <img src="styles/legend/RumahRtRw_21_5.png" /> Rumah Ketua Rt 01 Dusun Purbaketa<br />\
    <img src="styles/legend/RumahRtRw_21_6.png" /> Rumah Ketua Rt 01 Dusun Wanasri Karangbawang<br />\
    <img src="styles/legend/RumahRtRw_21_7.png" /> Rumah Ketua Rt 02 Dusun Cikoas<br />\
    <img src="styles/legend/RumahRtRw_21_8.png" /> Rumah Ketua Rt 02 Dusun Cilutung<br />\
    <img src="styles/legend/RumahRtRw_21_9.png" /> Rumah Ketua Rt 02 Dusun Cingebul Pengasinan<br />\
    <img src="styles/legend/RumahRtRw_21_10.png" /> Rumah Ketua Rt 02 Dusun Karang Reja<br />\
    <img src="styles/legend/RumahRtRw_21_11.png" /> Rumah Ketua Rt 02 Dusun Penusupan<br />\
    <img src="styles/legend/RumahRtRw_21_12.png" /> Rumah Ketua Rt 02 Dusun Purbaketa<br />\
    <img src="styles/legend/RumahRtRw_21_13.png" /> Rumah Ketua Rt 02 Dusun Wanasri Karangbawang<br />\
    <img src="styles/legend/RumahRtRw_21_14.png" /> Rumah Ketua Rt 03 Dusun Cikoas<br />\
    <img src="styles/legend/RumahRtRw_21_15.png" /> Rumah Ketua Rt 03 Dusun Karang Reja<br />\
    <img src="styles/legend/RumahRtRw_21_16.png" /> Rumah Ketua Rt 03 Dusun Purbaketa<br />\
    <img src="styles/legend/RumahRtRw_21_17.png" /> Rumah Ketua Rt 04 Dusun Purbaketa<br />\
    <img src="styles/legend/RumahRtRw_21_18.png" /> Rumah Ketua Rt 05 Dusun Purbaketa<br />\
    <img src="styles/legend/RumahRtRw_21_19.png" /> Rumah Ketua RW 01 Dusun Karangreja<br />\
    <img src="styles/legend/RumahRtRw_21_20.png" /> Rumah Ketua RW 02 Dusun Purbaketa<br />\
    <img src="styles/legend/RumahRtRw_21_21.png" /> Rumah Ketua RW 04 Dusun Cilutung<br />\
    <img src="styles/legend/RumahRtRw_21_22.png" /> Rumah Ketua RW 05 Dusun Penusupan<br />\
    <img src="styles/legend/RumahRtRw_21_23.png" /> Rumah Ketua RW 06 Dusun Cikoas<br />\
    <img src="styles/legend/RumahRtRw_21_24.png" /> Rumah Ketua RW 07 Dusun Cingebul Pengasinan<br />\
    <img src="styles/legend/RumahRtRw_21_25.png" /> Rumah Ketua RW 08 Dusun Wanasri KarangBawang<br />\
    <img src="styles/legend/RumahRtRw_21_26.png" /> <br />'
        });
var format_RTRwL_22 = new ol.format.GeoJSON();
var features_RTRwL_22 = format_RTRwL_22.readFeatures(json_RTRwL_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RTRwL_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RTRwL_22.addFeatures(features_RTRwL_22);
var lyr_RTRwL_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RTRwL_22, 
                style: style_RTRwL_22,
                popuplayertitle: "RT & Rw L",
                interactive: true,
    title: 'RT & Rw L<br />\
    <img src="styles/legend/RTRwL_22_0.png" /> Rumah Ketua Rt 01 Dusun Banjaranyar<br />\
    <img src="styles/legend/RTRwL_22_1.png" /> Rumah Ketua Rt 02 Dusun Banjaranyar<br />\
    <img src="styles/legend/RTRwL_22_2.png" /> Rumah Ketua Rt 03 Dusun Banjaranyar<br />\
    <img src="styles/legend/RTRwL_22_3.png" /> Rumah Ketua RW 09 Dusun Banjaranyar<br />\
    <img src="styles/legend/RTRwL_22_4.png" /> <br />'
        });

lyr_gadm41_IDNADM_ADM_4_0.setVisible(true);lyr_Rw_1.setVisible(true);lyr_Sawah_2.setVisible(true);lyr_Pinusan_3.setVisible(true);lyr_Clipped_4.setVisible(true);lyr_Clipped_5.setVisible(true);lyr_Clipped_6.setVisible(true);lyr_RTDusunKarangReja_7.setVisible(true);lyr_RTDusunPurbaketa_8.setVisible(true);lyr_RTDusunCilutung_9.setVisible(true);lyr_KantorDesaCingebul_10.setVisible(true);lyr_Lapangan_11.setVisible(true);lyr_RTDusunPenusupan_12.setVisible(true);lyr_RTDusunCikoas_13.setVisible(true);lyr_RTDusunCingebulPengasinan_14.setVisible(true);lyr_RTDusunWanasriKarangBawang_15.setVisible(true);lyr_Pendidikan_16.setVisible(true);lyr_Kuburan_17.setVisible(true);lyr_MusholaMasjid_18.setVisible(true);lyr_Jalanbesar_19.setVisible(true);lyr_RumahSaya_20.setVisible(true);lyr_RumahRtRw_21.setVisible(true);lyr_RTRwL_22.setVisible(true);
var layersList = [lyr_gadm41_IDNADM_ADM_4_0,lyr_Rw_1,lyr_Sawah_2,lyr_Pinusan_3,lyr_Clipped_4,lyr_Clipped_5,lyr_Clipped_6,lyr_RTDusunKarangReja_7,lyr_RTDusunPurbaketa_8,lyr_RTDusunCilutung_9,lyr_KantorDesaCingebul_10,lyr_Lapangan_11,lyr_RTDusunPenusupan_12,lyr_RTDusunCikoas_13,lyr_RTDusunCingebulPengasinan_14,lyr_RTDusunWanasriKarangBawang_15,lyr_Pendidikan_16,lyr_Kuburan_17,lyr_MusholaMasjid_18,lyr_Jalanbesar_19,lyr_RumahSaya_20,lyr_RumahRtRw_21,lyr_RTRwL_22];
lyr_gadm41_IDNADM_ADM_4_0.set('fieldAliases', {'fid': 'fid', 'GID_4': 'GID_4', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_Rw_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sawah_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Pinusan_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Clipped_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'depth': 'depth', 'railway': 'railway', 'blockage': 'blockage', 'amenity': 'amenity', 'name': 'name', 'width': 'width', 'public_tra': 'public_tra', 'bridge': 'bridge', 'smoothness': 'smoothness', 'landuse': 'landuse', 'covered': 'covered', 'diameter': 'diameter', 'aeroway': 'aeroway', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'water': 'water', 'highway': 'highway', 'surface': 'surface', 'pump': 'pump', 'oneway': 'oneway', 'layer': 'layer', 'natural': 'natural', });
lyr_Clipped_5.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'status': 'status', 'aeroway': 'aeroway', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', });
lyr_Clipped_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'health_fac': 'health_fac', 'depth': 'depth', 'office': 'office', 'railway': 'railway', 'operator_t': 'operator_t', 'blockage': 'blockage', 'roof_mater': 'roof_mater', 'rooms': 'rooms', 'tourism': 'tourism', 'amenity': 'amenity', 'name': 'name', 'staff_coun': 'staff_coun', 'public_tra': 'public_tra', 'width': 'width', 'access': 'access', 'bridge': 'bridge', 'smoothness': 'smoothness', 'beds': 'beds', 'covered': 'covered', 'landuse': 'landuse', 'staff_co_1': 'staff_co_1', 'diameter': 'diameter', 'access_roo': 'access_roo', 'building_m': 'building_m', 'healthcare': 'healthcare', 'opening_ho': 'opening_ho', 'government': 'government', 'isced_leve': 'isced_leve', 'denominati': 'denominati', 'historic': 'historic', 'status': 'status', 'aeroway': 'aeroway', 'toilets_di': 'toilets_di', 'waterway': 'waterway', 'parking': 'parking', 'tunnel': 'tunnel', 'building': 'building', 'operator': 'operator', 'barrier': 'barrier', 'capacity': 'capacity', 'man_made': 'man_made', 'health_f_1': 'health_f_1', 'emergency': 'emergency', 'highway': 'highway', 'water': 'water', 'surface': 'surface', 'pump': 'pump', 'natural': 'natural', 'oneway': 'oneway', 'addr_stree': 'addr_stree', 'toilets_ha': 'toilets_ha', 'health_f_2': 'health_f_2', 'layer': 'layer', 'military': 'military', 'shop': 'shop', 'medical_sy': 'medical_sy', 'addr_house': 'addr_house', 'religion': 'religion', });
lyr_RTDusunKarangReja_7.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RTDusunPurbaketa_8.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RTDusunCilutung_9.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_KantorDesaCingebul_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Lapangan_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_RTDusunPenusupan_12.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RTDusunCikoas_13.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RTDusunCingebulPengasinan_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RTDusunWanasriKarangBawang_15.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Pendidikan_16.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Kuburan_17.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_MusholaMasjid_18.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_Jalanbesar_19.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RumahSaya_20.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RumahRtRw_21.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_RTRwL_22.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_gadm41_IDNADM_ADM_4_0.set('fieldImages', {'fid': 'TextEdit', 'GID_4': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'GID_3': 'TextEdit', 'NAME_3': 'TextEdit', 'NAME_4': 'TextEdit', 'VARNAME_4': 'TextEdit', 'TYPE_4': 'TextEdit', 'ENGTYPE_4': 'TextEdit', 'CC_4': 'TextEdit', });
lyr_Rw_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sawah_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Pinusan_3.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Clipped_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'depth': 'TextEdit', 'railway': 'TextEdit', 'blockage': 'TextEdit', 'amenity': 'TextEdit', 'name': 'TextEdit', 'width': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'smoothness': 'TextEdit', 'landuse': 'TextEdit', 'covered': 'TextEdit', 'diameter': 'TextEdit', 'aeroway': 'TextEdit', 'waterway': 'TextEdit', 'parking': 'TextEdit', 'tunnel': 'TextEdit', 'building': 'TextEdit', 'operator': 'TextEdit', 'barrier': 'TextEdit', 'capacity': 'TextEdit', 'man_made': 'TextEdit', 'water': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'pump': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'natural': 'TextEdit', });
lyr_Clipped_5.set('fieldImages', {'osm_id': '', 'osm_type': '', 'health_fac': '', 'depth': '', 'office': '', 'railway': '', 'operator_t': '', 'blockage': '', 'roof_mater': '', 'rooms': '', 'tourism': '', 'amenity': '', 'name': '', 'staff_coun': '', 'public_tra': '', 'width': '', 'access': '', 'bridge': '', 'smoothness': '', 'beds': '', 'covered': '', 'landuse': '', 'staff_co_1': '', 'diameter': '', 'access_roo': '', 'building_m': '', 'healthcare': '', 'opening_ho': '', 'government': '', 'isced_leve': '', 'denominati': '', 'historic': '', 'status': '', 'aeroway': '', 'toilets_di': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'health_f_1': '', 'emergency': '', 'highway': '', 'water': '', 'surface': '', 'pump': '', 'natural': '', 'oneway': '', 'addr_stree': '', 'toilets_ha': '', 'health_f_2': '', 'layer': '', 'military': '', 'shop': '', 'medical_sy': '', 'addr_house': '', 'religion': '', });
lyr_Clipped_6.set('fieldImages', {'osm_id': '', 'osm_type': '', 'health_fac': '', 'depth': '', 'office': '', 'railway': '', 'operator_t': '', 'blockage': '', 'roof_mater': '', 'rooms': '', 'tourism': '', 'amenity': '', 'name': '', 'staff_coun': '', 'public_tra': '', 'width': '', 'access': '', 'bridge': '', 'smoothness': '', 'beds': '', 'covered': '', 'landuse': '', 'staff_co_1': '', 'diameter': '', 'access_roo': '', 'building_m': '', 'healthcare': '', 'opening_ho': '', 'government': '', 'isced_leve': '', 'denominati': '', 'historic': '', 'status': '', 'aeroway': '', 'toilets_di': '', 'waterway': '', 'parking': '', 'tunnel': '', 'building': '', 'operator': '', 'barrier': '', 'capacity': '', 'man_made': '', 'health_f_1': '', 'emergency': '', 'highway': '', 'water': '', 'surface': '', 'pump': '', 'natural': '', 'oneway': '', 'addr_stree': '', 'toilets_ha': '', 'health_f_2': '', 'layer': '', 'military': '', 'shop': '', 'medical_sy': '', 'addr_house': '', 'religion': '', });
lyr_RTDusunKarangReja_7.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RTDusunPurbaketa_8.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RTDusunCilutung_9.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_KantorDesaCingebul_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Lapangan_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_RTDusunPenusupan_12.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RTDusunCikoas_13.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RTDusunCingebulPengasinan_14.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RTDusunWanasriKarangBawang_15.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Pendidikan_16.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Kuburan_17.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_MusholaMasjid_18.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_Jalanbesar_19.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RumahSaya_20.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RumahRtRw_21.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_RTRwL_22.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', });
lyr_gadm41_IDNADM_ADM_4_0.set('fieldLabels', {'fid': 'no label', 'GID_4': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_Rw_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Sawah_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Pinusan_3.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Clipped_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'depth': 'no label', 'railway': 'no label', 'blockage': 'no label', 'amenity': 'no label', 'name': 'no label', 'width': 'no label', 'public_tra': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'landuse': 'no label', 'covered': 'no label', 'diameter': 'no label', 'aeroway': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'water': 'no label', 'highway': 'no label', 'surface': 'no label', 'pump': 'no label', 'oneway': 'no label', 'layer': 'no label', 'natural': 'no label', });
lyr_Clipped_5.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'status': 'no label', 'aeroway': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'highway': 'no label', 'water': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', });
lyr_Clipped_6.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'health_fac': 'no label', 'depth': 'no label', 'office': 'no label', 'railway': 'no label', 'operator_t': 'no label', 'blockage': 'no label', 'roof_mater': 'no label', 'rooms': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'name': 'no label', 'staff_coun': 'no label', 'public_tra': 'no label', 'width': 'no label', 'access': 'no label', 'bridge': 'no label', 'smoothness': 'no label', 'beds': 'no label', 'covered': 'no label', 'landuse': 'no label', 'staff_co_1': 'no label', 'diameter': 'no label', 'access_roo': 'no label', 'building_m': 'no label', 'healthcare': 'no label', 'opening_ho': 'no label', 'government': 'no label', 'isced_leve': 'no label', 'denominati': 'no label', 'historic': 'no label', 'status': 'no label', 'aeroway': 'no label', 'toilets_di': 'no label', 'waterway': 'no label', 'parking': 'no label', 'tunnel': 'no label', 'building': 'no label', 'operator': 'no label', 'barrier': 'no label', 'capacity': 'no label', 'man_made': 'no label', 'health_f_1': 'no label', 'emergency': 'no label', 'highway': 'no label', 'water': 'no label', 'surface': 'no label', 'pump': 'no label', 'natural': 'no label', 'oneway': 'no label', 'addr_stree': 'no label', 'toilets_ha': 'no label', 'health_f_2': 'no label', 'layer': 'no label', 'military': 'no label', 'shop': 'no label', 'medical_sy': 'no label', 'addr_house': 'no label', 'religion': 'no label', });
lyr_RTDusunKarangReja_7.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RTDusunPurbaketa_8.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RTDusunCilutung_9.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_KantorDesaCingebul_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Lapangan_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_RTDusunPenusupan_12.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RTDusunCikoas_13.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RTDusunCingebulPengasinan_14.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RTDusunWanasriKarangBawang_15.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Pendidikan_16.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_Kuburan_17.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_MusholaMasjid_18.set('fieldLabels', {'id': 'inline label - always visible', 'nama': 'no label', });
lyr_Jalanbesar_19.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahSaya_20.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RumahRtRw_21.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RTRwL_22.set('fieldLabels', {'id': 'no label', 'nama': 'no label', });
lyr_RTRwL_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});