const seriesData = [
    {   id: 1,
        imgSrc: "https://wallpapercave.com/wp/wp2730661.jpg",
        ottPf: "Hotstar",
        seriesName: "Game of Throne",
        imdb: "IMDb Rating: 9.2",
        srcLink: "https://www.hotstar.com/in/tv/game-of-thrones/8184/list/episodes/t-1_2_510"
    },

    {  
        id: 2,
        imgSrc: "https://wallpapercave.com/wp/wp5113717.jpg",
        ottPf: "A Netflix Original Original",
        seriesName: "Vikings",
        imdb: "IMDb Rating: 8.5",
        srcLink: "https://www.netflix.com/in/title/70301870"
    },

    {
        id: 3,
        imgSrc: "https://wallpapercave.com/wp/wp7285322.jpg",
        ottPf: "Amazon Original",
        seriesName: "Mirzapur",
        imdb: "IMDb Rating: 8.5",
        srcLink: "https://www.primevideo.com/detail/0PDOKMV9CRLOMO5EUKNCUJLG4Q/?ref_=dvm_pds_gen_in_as_s_gm_dsafeedn_mkw_s-dc&mrntrk=pcrid_580613895584_slid__pgrid_120713930559_pgeo_9298445_x_39524054209_adext__ptid_dsa-1354015554188&gclid=Cj0KCQiAwJWdBhCYARIsAJc4idBwX9CGCupaA_kh0WUx7mClPSp1hiviEVe5qvyEBBBaNsbq8_I03E8aAoZzEALw_wcB"
    },

    {
        id: 4,
        imgSrc: "https://wallpapercave.com/wp/wp3814512.png",
        ottPf: "A Netflix Original Series",
        seriesName: "Sacred Games",
        imdb: "IMDb Rating: 8.5",
        srcLink: "https://www.netflix.com/in/title/80115328"
    },

    {
        id: 5,
        imgSrc: "https://wallpapercave.com/wp/wp6075904.jpg",
        ottPf: "Amazon Original",
        seriesName: "The Family Man",
        imdb: "IMDb Rating: 8.7",
        srcLink: "https://www.primevideo.com/detail/0S3QYI59BAEI5KVLHCKSR91YGD/ref=atv_sr_def_c_unkc_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07X443FLN&qid=1671819136727"
    },

    {   
        id: 6,
        imgSrc: "https://w0.peakpx.com/wallpaper/778/538/HD-wallpaper-hanna-tv-show.jpg",
        ottPf: "Amazon Original",
        seriesName: "Hanna",
        imdb: "IMDb Rating: 7.6",
        srcLink: "https://www.primevideo.com/detail/Hanna/0GDQD61DFTIOW70O03Z2KDUY84?ref_=dvm_pds_gen_in_as_s_gt_dsastanm_mkw_-dc_pcrid_{adid}&mrntrk=slid__pgrid_149694189588_pgeo_9298445_x__adext__ptid_dsa-437115340933&gclid=Cj0KCQiAwJWdBhCYARIsAJc4idDCO1cv3i5gUQBdmOlZ4S5SA8FR2-VfEbLf0hRtp_6cxSIDcHqUDkUaArsvEALw_wcB"
    },

    /*Copy Previous Data */
    {   
        id: 7,
        imgSrc: "https://wallpapercave.com/wp/wp2730661.jpg",
        ottPf: "Hotstar",
        seriesName: "Game of Throne",
        imdb: "IMDb Rating: 9.2",
        srcLink: "https://www.hotstar.com/in/tv/game-of-thrones/8184/list/episodes/t-1_2_510"
    },

    {
        id: 8,
        imgSrc: "https://wallpapercave.com/wp/wp5113717.jpg",
        ottPf: "A Netflix Original Original",
        seriesName: "Vikings",
        imdb: "IMDb Rating: 8.5",
        srcLink: "https://www.netflix.com/in/title/70301870"
    },

    {
        id: 9,
        imgSrc: "https://wallpapercave.com/wp/wp7285322.jpg",
        ottPf: "Amazon Original",
        seriesName: "Mirzapur",
        imdb: "IMDb Rating: 8.5",
        srcLink: "https://www.primevideo.com/detail/0PDOKMV9CRLOMO5EUKNCUJLG4Q/?ref_=dvm_pds_gen_in_as_s_gm_dsafeedn_mkw_s-dc&mrntrk=pcrid_580613895584_slid__pgrid_120713930559_pgeo_9298445_x_39524054209_adext__ptid_dsa-1354015554188&gclid=Cj0KCQiAwJWdBhCYARIsAJc4idBwX9CGCupaA_kh0WUx7mClPSp1hiviEVe5qvyEBBBaNsbq8_I03E8aAoZzEALw_wcB"
    },

    {
        id: 10,
        imgSrc: "https://wallpapercave.com/wp/wp3814512.png",
        ottPf: "A Netflix Original Series",
        seriesName: "Sacred Games",
        imdb: "IMDb Rating: 8.5",
        srcLink: "https://www.netflix.com/in/title/80115328"
    },

    {
        id: 11,
        imgSrc: "https://wallpapercave.com/wp/wp6075904.jpg",
        ottPf: "Amazon Original",
        seriesName: "The Family Man",
        imdb: "IMDb Rating: 8.7",
        srcLink: "https://www.primevideo.com/detail/0S3QYI59BAEI5KVLHCKSR91YGD/ref=atv_sr_def_c_unkc_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B07X443FLN&qid=1671819136727"
    },

    {
        id: 12,
        imgSrc: "https://w0.peakpx.com/wallpaper/778/538/HD-wallpaper-hanna-tv-show.jpg",
        ottPf: "Amazon Original",
        seriesName: "Hanna",
        imdb: "IMDb Rating: 7.6",
        srcLink: "https://www.primevideo.com/detail/Hanna/0GDQD61DFTIOW70O03Z2KDUY84?ref_=dvm_pds_gen_in_as_s_gt_dsastanm_mkw_-dc_pcrid_{adid}&mrntrk=slid__pgrid_149694189588_pgeo_9298445_x__adext__ptid_dsa-437115340933&gclid=Cj0KCQiAwJWdBhCYARIsAJc4idDCO1cv3i5gUQBdmOlZ4S5SA8FR2-VfEbLf0hRtp_6cxSIDcHqUDkUaArsvEALw_wcB"
    }
]

export default seriesData;