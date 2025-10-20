
import type { Dictionary } from '@/context/language-context';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  points: number;
}

export interface Quiz {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface Video {
  title:string;
  description: string;
  embedUrl: string;
  info?: string;
}

export interface ComicPanel {
  title: string;
  text: string;
  imageUrl: string;
  imageHint: string;
}

export interface Comic {
  title: string;
  description: string;
  panels: ComicPanel[];
}


export interface InteractiveContent {
  quiz?: Quiz;
  video: Video;
  comic?: Comic;
}

export const getInteractiveContent = (dict: Dictionary): { [key: string]: InteractiveContent } => {
    const contentDict = dict.interactiveContent;
    return {
        'smong-selamat-dari-lautan': {
            video: {
                title: contentDict.smong.video.title,
                description: contentDict.smong.video.description,
                embedUrl: 'https://www.canva.com/design/DAGy2A4uKKg/oKxoc_2wvJT-q7amzHQQWA/watch?embed',
                info: contentDict.smong.video.info,
            },
            quiz: contentDict.smong.quiz,
            comic: {
                ...contentDict.smong.comic,
                panels: [
                    { ...contentDict.smong.comic.panels[0], imageUrl: 'https://i.ibb.co/7dWp6cGz/Gemini-Generated-Image-y3jausy3jausy3ja.png', imageHint: 'elder teaching children' },
                    { ...contentDict.smong.comic.panels[1], imageUrl: 'https://i.ibb.co/sv2Mhw6F/Gemini-Generated-Image-ubwgstubwgstubwg.png', imageHint: 'earthquake shaking village' },
                    { ...contentDict.smong.comic.panels[2], imageUrl: 'https://i.ibb.co/d4Zc2dW2/Gemini-Generated-Image-nep5q4nep5q4nep5.png', imageHint: 'people running uphill' },
                    { ...contentDict.smong.comic.panels[3], imageUrl: 'https://i.ibb.co/0yrct9db/Gemini-Generated-Image-o3lyr0o3lyr0o3ly.png', imageHint: 'crowd climbing hill' },
                    { ...contentDict.smong.comic.panels[4], imageUrl: 'https://i.ibb.co/GQSD4TWr/Gemini-Generated-Image-muisyomuisyomuis.png', imageHint: 'tsunami wave hitting coast' },
                    { ...contentDict.smong.comic.panels[5], imageUrl: 'https://i.ibb.co/N2td66Hx/Gemini-Generated-Image-vpirzivpirzivpir.png', imageHint: 'survivors watching sunrise' },
                ]
            }
        },
        'hutan-bakau-penjaga-pantai': {
            video: {
                title: contentDict.bakau.video.title,
                description: contentDict.bakau.video.description,
                embedUrl: 'https://www.canva.com/design/DAG05xtxObw/lwH2TnsBk2C8fsfxXhThXw/watch?embed',
                info: contentDict.bakau.video.info,
            },
            quiz: contentDict.bakau.quiz,
            comic: {
                ...contentDict.bakau.comic,
                panels: [
                    { ...contentDict.bakau.comic.panels[0], imageUrl: 'https://i.ibb.co/PZHd26b4/Gemini-Generated-Image-421pmy421pmy421p.png', imageHint: 'eroded coastline storm' },
                    { ...contentDict.bakau.comic.panels[1], imageUrl: 'https://i.ibb.co/JWpk16NX/Gemini-Generated-Image-rsvte8rsvte8rsvt.png', imageHint: 'village elder storytelling' },
                    { ...contentDict.bakau.comic.panels[2], imageUrl: 'https://i.ibb.co/qLMNkxFd/Gemini-Generated-Image-2b2mqh2b2mqh2b2m.png', imageHint: 'community planting mangroves' },
                    { ...contentDict.bakau.comic.panels[3], imageUrl: 'https://i.ibb.co/fVtfWBkG/Gemini-Generated-Image-6n753u6n753u6n75.png', imageHint: 'failed mangrove sapling' },
                    { ...contentDict.bakau.comic.panels[4], imageUrl: 'https://i.ibb.co/cKZnnyh5/Gemini-Generated-Image-t9i448t9i448t9i4.png', imageHint: 'dense mangrove forest' },
                    { ...contentDict.bakau.comic.panels[5], imageUrl: 'https://i.ibb.co/bRz9Qck7/Gemini-Generated-Image-4rapqm4rapqm4rap.png', imageHint: 'fish crabs mangroves' },
                ]
            },
        },
        'dapur-umum-perdamaian': {
            video: {
                title: contentDict.dapurUmum.video.title,
                description: contentDict.dapurUmum.video.description,
                embedUrl: 'https://www.canva.com/design/DAG058Re3lE/fIjzr5r35dMT83HRBGlMfw/watch?embed',
                info: contentDict.dapurUmum.video.info,
            },
            quiz: contentDict.dapurUmum.quiz,
            comic: {
                ...contentDict.dapurUmum.comic,
                panels: [
                    { ...contentDict.dapurUmum.comic.panels[0], imageUrl: 'https://i.ibb.co/JWCgC8W2/Gemini-Generated-Image-higpgmhigpgmhigp.png', imageHint: 'sad village atmosphere' },
                    { ...contentDict.dapurUmum.comic.panels[1], imageUrl: 'https://i.ibb.co/zWHC2Vf7/Gemini-Generated-Image-6ohms66ohms66ohm.png', imageHint: 'women discussing plan' },
                    { ...contentDict.dapurUmum.comic.panels[2], imageUrl: 'https://i.ibb.co/FLFgPs27/Gemini-Generated-Image-etuhnbetuhnbetuh.png', imageHint: 'setting up community kitchen' },
                    { ...contentDict.dapurUmum.comic.panels[3], imageUrl: 'https://i.ibb.co/gZymfGtt/Gemini-Generated-Image-p1tl3p1tl3p1tl3p.png', imageHint: 'community kitchen cooking' },
                    { ...contentDict.dapurUmum.comic.panels[4], imageUrl: 'https://i.ibb.co/4ntNZGTH/Gemini-Generated-Image-5y1cbj5y1cbj5y1c.png', imageHint: 'people talking laughing' },
                    { ...contentDict.dapurUmum.comic.panels[5], imageUrl: 'https://i.ibb.co/T3f302F/Gemini-Generated-Image-rmhvlgrmhvlgrmhv.png', imageHint: 'people eating together happily' },
                ]
            },
        },
        'lumbung-padi-komunal': {
            video: {
                title: contentDict.lumbungPadi.video.title,
                description: contentDict.lumbungPadi.video.description,
                embedUrl: 'https://www.canva.com/design/DAG062E6zns/ZlMWr3u5a6HfVicIQx5qNQ/watch?embed',
                info: contentDict.lumbungPadi.video.info,
            },
            quiz: contentDict.lumbungPadi.quiz,
            comic: {
                ...contentDict.lumbungPadi.comic,
                panels: [
                    { ...contentDict.lumbungPadi.comic.panels[0], imageUrl: 'https://i.ibb.co/XrSWCszM/Gemini-Generated-Image-mfguf9mfguf9mfgu.png', imageHint: 'gayo highlands farming' },
                    { ...contentDict.lumbungPadi.comic.panels[1], imageUrl: 'https://i.ibb.co/TxLMKmZd/Gemini-Generated-Image-o6m8b8o6m8b8o6m8.png', imageHint: 'putting rice into communal barn' },
                    { ...contentDict.lumbungPadi.comic.panels[2], imageUrl: 'https://i.ibb.co/N2Hcz9Q6/Gemini-Generated-Image-nzlk8inzlk8inzlk.png', imageHint: 'sharing food community' },
                    { ...contentDict.lumbungPadi.comic.panels[3], imageUrl: 'https://i.ibb.co/s9nftm6k/Gemini-Generated-Image-2yb53r2yb53r2yb5.png', imageHint: 'happy farming community' },
                ]
            },
        },
        'bah-tangse-sungai-murka': {
            video: {
                title: contentDict.bahTangse.video.title,
                description: contentDict.bahTangse.video.description,
                embedUrl: 'https://www.canva.com/design/DAG1Gsxv32g/oEZ8pFfT0nK2UZJACt_RWw/watch?embed',
                info: contentDict.bahTangse.video.info,
            },
            quiz: contentDict.bahTangse.quiz,
            comic: {
                ...contentDict.bahTangse.comic,
                panels: [
                    { ...contentDict.bahTangse.comic.panels[0], imageUrl: 'https://i.ibb.co/8gC04Tds/Gemini-Generated-Image-tzd2r9tzd2r9tzd2.png', imageHint: 'dark stormy night village' },
                    { ...contentDict.bahTangse.comic.panels[1], imageUrl: 'https://i.ibb.co/MxDVKgQ8/Gemini-Generated-Image-ptyvfqptyvfqptyv.png', imageHint: 'raging flash flood logs' },
                    { ...contentDict.bahTangse.comic.panels[2], imageUrl: 'https://i.ibb.co/Q31hqKRj/Gemini-Generated-Image-mbv9yumbv9yumbv9.png', imageHint: 'mosque speaker warning' },
                    { ...contentDict.bahTangse.comic.panels[3], imageUrl: 'https://i.ibb.co/8gvn36Hj/Gemini-Generated-Image-xbiewaxbiewaxbie.png', imageHint: 'people running uphill dark' },
                    { ...contentDict.bahTangse.comic.panels[4], imageUrl: 'https://i.ibb.co/gMTdhPdj/Gemini-Generated-Image-diwjbbdiwjbbdiwj.png', imageHint: 'village destroyed mud' },
                    { ...contentDict.bahTangse.comic.panels[5], imageUrl: 'https://i.ibb.co/gMvs88K7/Gemini-Generated-Image-6ijxun6ijxun6ijx.png', imageHint: 'community planting trees' },
                ]
            },
        },
        'kopi-gayo-aroma-perdamaian': {
            video: {
                title: contentDict.kopiGayo.video.title,
                description: contentDict.kopiGayo.video.description,
                embedUrl: 'https://www.canva.com/design/DAG1HC5cT1A/5pCeQTue043ynhFySg1WcQ/watch?embed',
                info: contentDict.kopiGayo.video.info,
            },
            quiz: contentDict.kopiGayo.quiz,
            comic: {
                ...contentDict.kopiGayo.comic,
                panels: [
                    { ...contentDict.kopiGayo.comic.panels[0], imageUrl: 'https://i.ibb.co/N612z0S8/Gemini-Generated-Image-fc3gznfc3gznfc3g.png', imageHint: 'abandoned coffee plantation' },
                    { ...contentDict.kopiGayo.comic.panels[1], imageUrl: 'https://i.ibb.co/qYDz7XHx/Gemini-Generated-Image-72mog772mog772mo.png', imageHint: 'farmer looking at overgrown field' },
                    { ...contentDict.kopiGayo.comic.panels[2], imageUrl: 'https://i.ibb.co/Gr8hPCK/Gemini-Generated-Image-a3lug5a3lug5a3lu.png', imageHint: 'farmer holding coffee beans' },
                    { ...contentDict.kopiGayo.comic.panels[3], imageUrl: 'https://i.ibb.co/gL1dyvWm/Gemini-Generated-Image-wneukxwneukxwneu.png', imageHint: 'farmers meeting cooperative' },
                    { ...contentDict.kopiGayo.comic.panels[4], imageUrl: 'https://i.ibb.co/BxTrr9y/Gemini-Generated-Image-ntsba2ntsba2ntsb.png', imageHint: 'coffee export shipping' },
                    { ...contentDict.kopiGayo.comic.panels[5], imageUrl: 'https://i.ibb.co/65QLYw8/Gemini-Generated-Image-xp78xcxp78xcxp78.png', imageHint: 'cup of steaming gayo coffee' },
                ]
            },
        },
        'api-di-bukit-barisan': {
            video: {
                title: contentDict.apiBukit.video.title,
                description: contentDict.apiBukit.video.description,
                embedUrl: 'https://www.canva.com/design/DAG1GsSgV9M/ju7Vt8gVq1yDMj2-4DKklg/watch?embed',
                info: contentDict.apiBukit.video.info,
            },
            quiz: contentDict.apiBukit.quiz,
            comic: {
                ...contentDict.apiBukit.comic,
                panels: [
                    { ...contentDict.apiBukit.comic.panels[0], imageUrl: 'https://i.ibb.co/Nd4BCwnh/Gemini-Generated-Image-mx2j89mx2j89mx2j.png', imageHint: 'dry pine forest' },
                    { ...contentDict.apiBukit.comic.panels[1], imageUrl: 'https://i.ibb.co/xQ84Wh9/Gemini-Generated-Image-fttc78fttc78fttc.png', imageHint: 'community patrolling forest' },
                    { ...contentDict.apiBukit.comic.panels[2], imageUrl: 'https://i.ibb.co/YwZvdXm/Gemini-Generated-Image-k3ov2dk3ov2dk3ov.png', imageHint: 'community meeting education' },
                    { ...contentDict.apiBukit.comic.panels[3], imageUrl: 'https://i.ibb.co/wrwhkWjG/Gemini-Generated-Image-1tus9y1tus9y1tus.png', imageHint: 'people fighting forest fire' },
                    { ...contentDict.apiBukit.comic.panels[4], imageUrl: 'https://i.ibb.co/yFC19D6y/Gemini-Generated-Image-icr3a2icr3a2icr3.png', imageHint: 'community shaking hands' },
                    { ...contentDict.apiBukit.comic.panels[5], imageUrl: 'https://i.ibb.co/39bW7xJz/Gemini-Generated-Image-x2zpffx2zpffx2zp.png', imageHint: 'green forest sunrise' },
                ]
            },
        },
        'pemuda-penjaga-adat': {
            video: {
                title: contentDict.pemudaAdat.video.title,
                description: contentDict.pemudaAdat.video.description,
                embedUrl: 'https://www.canva.com/design/DAG1OM98Yrw/nyuZ9I8l9VuDI6AAdSYbCw/watch?embed',
                info: contentDict.pemudaAdat.video.info,
            },
            quiz: contentDict.pemudaAdat.quiz,
            comic: {
                ...contentDict.pemudaAdat.comic,
                panels: [
                    { ...contentDict.pemudaAdat.comic.panels[0], imageUrl: 'https://i.ibb.co/GvdSwzQf/Gemini-Generated-Image-3pu65m3pu65m3pu6.png', imageHint: 'disaffected youth group' },
                    { ...contentDict.pemudaAdat.comic.panels[1], imageUrl: 'https://i.ibb.co/hFpC4fNv/Gemini-Generated-Image-2ct3h82ct3h82ct3.png', imageHint: 'youth leaders discussing' },
                    { ...contentDict.pemudaAdat.comic.panels[2], imageUrl: 'https://i.ibb.co/FqH0xKx3/Gemini-Generated-Image-qq18guqq18guqq18.png', imageHint: 'reopening old building' },
                    { ...contentDict.pemudaAdat.comic.panels[3], imageUrl: 'https://i.ibb.co/d05SD259/Gemini-Generated-Image-esu33aesu33aesu3.png', imageHint: 'youth practicing seudati dance' },
                    { ...contentDict.pemudaAdat.comic.panels[4], imageUrl: 'https://i.ibb.co/NgQtKFvQ/Gemini-Generated-Image-9kobq9kobq9kobq9.png', imageHint: 'young dancers smiling' },
                    { ...contentDict.pemudaAdat.comic.panels[5], imageUrl: 'https://i.ibb.co/MDmNGYvr/Gemini-Generated-Image-sqvrxesqvrxesqvr.png', imageHint: 'seudati dance performance' },
                ]
            },
        },
        'perempuan-penganyam-harapan': {
            video: {
                title: contentDict.perempuanPenganyam.video.title,
                description: contentDict.perempuanPenganyam.video.description,
                embedUrl: 'https://www.canva.com/design/DAG1VaVt0qc/Gi6ESi-KQgWt1fEoZtG_NA/watch?embed',
                info: contentDict.perempuanPenganyam.video.info,
            },
            quiz: contentDict.perempuanPenganyam.quiz,
            comic: {
                ...contentDict.perempuanPenganyam.comic,
                panels: [
                    { ...contentDict.perempuanPenganyam.comic.panels[0], imageUrl: 'https://i.ibb.co/JwwT5gf9/Gemini-Generated-Image-d4jht0d4jht0d4jh.png', imageHint: 'sad woman looking at ocean' },
                    { ...contentDict.perempuanPenganyam.comic.panels[1], imageUrl: 'https://i.ibb.co/N2shQ8zW/Gemini-Generated-Image-lt0y0glt0y0glt0y.png', imageHint: 'women weaving together' },
                    { ...contentDict.perempuanPenganyam.comic.panels[2], imageUrl: 'https://i.ibb.co/9m56wN9M/Gemini-Generated-Image-6hbsja6hbsja6hbs.png', imageHint: 'closeup hands weaving' },
                    { ...contentDict.perempuanPenganyam.comic.panels[3], imageUrl: 'https://i.ibb.co/DDGWWjDV/Gemini-Generated-Image-2onqdx2onqdx2onq.png', imageHint: 'woven bags and mats market' },
                    { ...contentDict.perempuanPenganyam.comic.panels[4], imageUrl: 'https://i.ibb.co/RkGvwjR8/Gemini-Generated-Image-pucmhfpucmhfpucm.png', imageHint: 'woman proudly holding woven bag' },
                    { ...contentDict.perempuanPenganyam.comic.panels[5], imageUrl: 'https://i.ibb.co/846HCc3H/Gemini-Generated-Image-sh6lbush6lbush6l.png', imageHint: 'group of happy women smiling' },
                ]
            },
        },
        'arsitektur-rumah-panggung': {
            video: {
                title: contentDict.arsitektur.video.title,
                description: contentDict.arsitektur.video.description,
                embedUrl: 'https://www.canva.com/design/DAG1ml1mW5M/P8bGYXOvuob1i0iTT9TQhg/watch?embed',
                info: contentDict.arsitektur.video.info,
            },
            quiz: contentDict.arsitektur.quiz,
            comic: {
                ...contentDict.arsitektur.comic,
                panels: [
                    { ...contentDict.arsitektur.comic.panels[0], imageUrl: 'https://i.ibb.co/ycjpYJDF/Gemini-Generated-Image-k7l0glk7l0glk7l0.png', imageHint: 'aceh house after tsunami' },
                    { ...contentDict.arsitektur.comic.panels[1], imageUrl: 'https://i.ibb.co/Q7VdjXBn/Gemini-Generated-Image-c9fxgzc9fxgzc9fx.png', imageHint: 'diagram of stilt house structure' },
                    { ...contentDict.arsitektur.comic.panels[2], imageUrl: 'https://i.ibb.co/KdDRNDF/Gemini-Generated-Image-imaeuhimaeuhimae.png', imageHint: 'water flowing under stilt house' },
                    { ...contentDict.arsitektur.comic.panels[3], imageUrl: 'https://i.ibb.co/PG545YGD/Gemini-Generated-Image-iof1g5iof1g5iof1.png', imageHint: 'people studying old house' },
                    { ...contentDict.arsitektur.comic.panels[4], imageUrl: 'https://i.ibb.co/wrZyYXVc/Gemini-Generated-Image-ywlmvrywlmvrywlm.png', imageHint: 'architect drawing new house plan' },
                    { ...contentDict.arsitektur.comic.panels[5], imageUrl: 'https://i.ibb.co/JfnLPtj/Gemini-Generated-Image-wo8rv7wo8rv7wo8r.png', imageHint: 'modern house with traditional aceh design' },
                ]
            },
        },
        'seni-melawan-trauma': {
            video: {
                title: contentDict.seniTrauma.video.title,
                description: contentDict.seniTrauma.video.description,
                embedUrl: 'https://www.canva.com/design/DAG1oFpnXaM/1AYF38ldBYM-z4jiL58VMg/watch?embed',
                info: contentDict.seniTrauma.video.info,
            },
            quiz: contentDict.seniTrauma.quiz,
            comic: {
                ...contentDict.seniTrauma.comic,
                panels: [
                    { ...contentDict.seniTrauma.comic.panels[0], imageUrl: 'https://i.ibb.co/PZFB87MM/Gemini-Generated-Image-yr5r75yr5r75yr5r.png', imageHint: 'ruined city wall' },
                    { ...contentDict.seniTrauma.comic.panels[1], imageUrl: 'https://i.ibb.co/qMvHYSfd/Gemini-Generated-Image-9zglxq9zglxq9zgl.png', imageHint: 'group of artists planning' },
                    { ...contentDict.seniTrauma.comic.panels[2], imageUrl: 'https://i.ibb.co/5XGSLv5c/Gemini-Generated-Image-d5p172d5p172d5p1.png', imageHint: 'artist painting mural on wall' },
                    { ...contentDict.seniTrauma.comic.panels[3], imageUrl: 'https://i.ibb.co/1GzKfrWz/Gemini-Generated-Image-2hh0ld2hh0ld2hh0.png', imageHint: 'colorful community mural' },
                    { ...contentDict.seniTrauma.comic.panels[4], imageUrl: 'https://i.ibb.co/3ymkCsBm/Gemini-Generated-Image-363z96363z96363z.png', imageHint: 'closeup mural painting hope' },
                    { ...contentDict.seniTrauma.comic.panels[5], imageUrl: 'https://i.ibb.co/pjr6h7s0/Gemini-Generated-Image-ikoughikoughikou.png', imageHint: 'children interacting with mural' },
                ]
            },
        },
        'nelayan-dan-tanda-alam': {
            video: {
                title: contentDict.nelayan.video.title,
                description: contentDict.nelayan.video.description,
                embedUrl: 'https://www.canva.com/design/DAG1sApRGB8/Kynmeiy6S-0u7YVxRG11qw/watch?embed',
                info: contentDict.nelayan.video.info,
            },
            quiz: contentDict.nelayan.quiz,
            comic: {
                ...contentDict.nelayan.comic,
                panels: [
                    { ...contentDict.nelayan.comic.panels[0], imageUrl: 'https://i.ibb.co/zhj5vRfQ/Gemini-Generated-Image-yz9meiyz9meiyz9m.png', imageHint: 'fisherman at night starry sky' },
                    { ...contentDict.nelayan.comic.panels[1], imageUrl: 'https://i.ibb.co/NgbyjjMf/Gemini-Generated-Image-ped9eaped9eaped9.png', imageHint: 'orion constellation over sea' },
                    { ...contentDict.nelayan.comic.panels[2], imageUrl: 'https://i.ibb.co/XZQgHWxH/Gemini-Generated-Image-a8gbcxa8gbcxa8gb.png', imageHint: 'dolphins swimming near coast' },
                    { ...contentDict.nelayan.comic.panels[3], imageUrl: 'https://i.ibb.co/gCpZCzB/Gemini-Generated-Image-4mvuio4mvuio4mvu.png', imageHint: 'seabirds diving for fish' },
                    { ...contentDict.nelayan.comic.panels[4], imageUrl: 'https://i.ibb.co/kVgdrTbg/Gemini-Generated-Image-h9xlylh9xlylh9xl.png', imageHint: 'father teaching son on boat' },
                    { ...contentDict.nelayan.comic.panels[5], imageUrl: 'https://i.ibb.co/4wvv5KV3/Gemini-Generated-Image-lrl3ielrl3ielrl3.png', imageHint: 'fishing boat returning at sunrise' },
                ]
            },
        },
        'sumur-tua-sumber-kehidupan': {
            video: {
                title: contentDict.sumurTua.video.title,
                description: contentDict.sumurTua.video.description,
                embedUrl: 'https://www.canva.com/design/DAG1sCoVdCc/ZIARnG8HuYWaqhyO4QlzfA/watch?embed',
                info: contentDict.sumurTua.video.info,
            },
            quiz: contentDict.sumurTua.quiz,
            comic: {
                ...contentDict.sumurTua.comic,
                panels: [
                    { ...contentDict.sumurTua.comic.panels[0], imageUrl: 'https://i.ibb.co/6JJCYJZw/Gemini-Generated-Image-48cp6g48cp6g48cp.png', imageHint: 'cracked dry earth' },
                    { ...contentDict.sumurTua.comic.panels[1], imageUrl: 'https://i.ibb.co/1tC6SMg3/Gemini-Generated-Image-as3nydas3nydas3n.png', imageHint: 'old man pointing towards forest' },
                    { ...contentDict.sumurTua.comic.panels[2], imageUrl: 'https://i.ibb.co/RG9HYJVM/Gemini-Generated-Image-1uj5031uj5031uj5.png', imageHint: 'community cleaning old well' },
                    { ...contentDict.sumurTua.comic.panels[3], imageUrl: 'https://i.ibb.co/N2DZQFsc/Gemini-Generated-Image-4o62wj4o62wj4o62.png', imageHint: 'clear water in old well' },
                    { ...contentDict.sumurTua.comic.panels[4], imageUrl: 'https://i.ibb.co/BKNPTWgd/Gemini-Generated-Image-279br9279br9279b.png', imageHint: 'people queuing for water' },
                    { ...contentDict.sumurTua.comic.panels[5], imageUrl: 'https://i.ibb.co/FLhZFwvy/Gemini-Generated-Image-t1ww3it1ww3it1ww.png', imageHint: 'community gathered around old well' },
                ]
            },
        },
        'ilmu-falak-di-pesantren': {
            video: {
                title: contentDict.ilmuFalak.video.title,
                description: contentDict.ilmuFalak.video.description,
                embedUrl: 'https://www.canva.com/design/DAG1sLRnb6M/mPY87WGVdMwVfMQqdpi2cQ/watch?embed',
                info: contentDict.ilmuFalak.video.info,
            },
            quiz: contentDict.ilmuFalak.quiz,
            comic: {
                ...contentDict.ilmuFalak.comic,
                panels: [
                    { ...contentDict.ilmuFalak.comic.panels[0], imageUrl: 'https://i.ibb.co/Rk9pNtJp/Gemini-Generated-Image-8m38498m38498m38.png', imageHint: 'students studying in dayah' },
                    { ...contentDict.ilmuFalak.comic.panels[1], imageUrl: 'https://i.ibb.co/DHNkQTGn/Gemini-Generated-Image-lr9x50lr9x50lr9x.png', imageHint: 'teacher pointing at stars map' },
                    { ...contentDict.ilmuFalak.comic.panels[2], imageUrl: 'https://i.ibb.co/d0dtbX3X/Gemini-Generated-Image-168pi168pi168pi1.png', imageHint: 'scholar talking to fisherman' },
                    { ...contentDict.ilmuFalak.comic.panels[3], imageUrl: 'https://i.ibb.co/FLygk1L4/Gemini-Generated-Image-50j9v650j9v650j9.png', imageHint: 'student helping community' },
                    { ...contentDict.ilmuFalak.comic.panels[4], imageUrl: 'https://i.ibb.co/xS91Wwgz/Gemini-Generated-Image-j2fi8xj2fi8xj2fi.png', imageHint: 'mosque against starry sky' },
                    { ...contentDict.ilmuFalak.comic.panels[5], imageUrl: 'https://i.ibb.co/0VfjNWDg/Gemini-Generated-Image-z7pvrxz7pvrxz7pv.png', imageHint: 'night sky over fishing village' },
                ]
            },
        },
        'pasar-sebagai-ruang-sosial': {
            video: {
                title: contentDict.pasar.video.title,
                description: contentDict.pasar.video.description,
                embedUrl: 'https://www.canva.com/design/DAG14RO1hQc/5heno25dXGGw6tKD2MrbhA/watch?embed',
                info: contentDict.pasar.video.info,
            },
            quiz: contentDict.pasar.quiz,
            comic: {
                ...contentDict.pasar.comic,
                panels: [
                    { ...contentDict.pasar.comic.panels[0], imageUrl: 'https://i.ibb.co/Lz42QxHm/Gemini-Generated-Image-k208uik208uik208.png', imageHint: 'bustling traditional market' },
                    { ...contentDict.pasar.comic.panels[1], imageUrl: 'https://i.ibb.co/CspnwtQT/Gemini-Generated-Image-dsjhqbdsjhqbdsjh.png', imageHint: 'people talking at coffee stall' },
                    { ...contentDict.pasar.comic.panels[2], imageUrl: 'https://i.ibb.co/ch4DmBK8/Gemini-Generated-Image-o64ap4o64ap4o64a.png', imageHint: 'group of men drinking coffee' },
                    { ...contentDict.pasar.comic.panels[3], imageUrl: 'https://i.ibb.co/5XxgpBFd/Gemini-Generated-Image-epyxelepyxelepyx.png', imageHint: 'two people having serious talk' },
                    { ...contentDict.pasar.comic.panels[4], imageUrl: 'https://i.ibb.co/LXQKySBZ/Gemini-Generated-Image-k6s3dck6s3dck6s3.png', imageHint: 'smiling market vendor' },
                    { ...contentDict.pasar.comic.panels[5], imageUrl: 'https://i.ibb.co/V0hmJPM8/Gemini-Generated-Image-9lfrea9lfrea9lfr.png', imageHint: 'people laughing in market' },
                ]
            },
        },
        'siaga-si-kucing-cerdas': {
            video: {
                title: contentDict.kucingCerdas.video.title,
                description: contentDict.kucingCerdas.video.description,
                embedUrl: 'https://www.canva.com/design/DAG18l97wYc/kwO9aaQIufH-t5cDC_36Ag/watch?embed',
                info: contentDict.kucingCerdas.video.info,
            },
            quiz: contentDict.kucingCerdas.quiz,
            comic: {
                ...contentDict.kucingCerdas.comic,
                panels: [
                    { ...contentDict.kucingCerdas.comic.panels[0], imageUrl: 'https://i.ibb.co/cSb6HNbk/Gemini-Generated-Image-yka8lryka8lryka8.png', imageHint: 'cute cat listening to old man' },
                    { ...contentDict.kucingCerdas.comic.panels[1], imageUrl: 'https://i.ibb.co/spP9SMTt/Gemini-Generated-Image-qxxmruqxxmruqxxm.png', imageHint: 'cartoon earthquake cat under table' },
                    { ...contentDict.kucingCerdas.comic.panels[2], imageUrl: 'https://i.ibb.co/CpKGCDBf/Gemini-Generated-Image-5ku3hs5ku3hs5ku3.png', imageHint: 'other cats hiding under furniture' },
                    { ...contentDict.kucingCerdas.comic.panels[3], imageUrl: 'https://i.ibb.co/Kj8wXcd1/Gemini-Generated-Image-rm690krm690krm69.png', imageHint: 'cats walking to open field' },
                    { ...contentDict.kucingCerdas.comic.panels[4], imageUrl: 'https://i.ibb.co/YB6z4MkN/Gemini-Generated-Image-cw22b0cw22b0cw22.png', imageHint: 'cat pointing to hill' },
                    { ...contentDict.kucingCerdas.comic.panels[5], imageUrl: 'https://i.ibb.co/TGNn2hy/Gemini-Generated-Image-spdth3spdth3spdt.png', imageHint: 'happy cats playing on hill' },
                ]
            },
        },
        'gunung-aruna-siap-siaga': {
            video: {
                title: contentDict.gunungAruna.video.title,
                description: contentDict.gunungAruna.video.description,
                embedUrl: 'https://www.canva.com/design/DAG2Ub_f4fM/Cmj-UjmwjsjdsMgHp_VIwg/watch?embed',
                info: contentDict.gunungAruna.video.info,
            },
            quiz: contentDict.gunungAruna.quiz,
            comic: {
                ...contentDict.gunungAruna.comic,
                panels: [
                    { ...contentDict.gunungAruna.comic.panels[0], imageUrl: 'https://i.ibb.co/99CGxdNp/Gemini-Generated-Image-70jw6w70jw6w70jw.png', imageHint: 'boy looking at smoking volcano' },
                    { ...contentDict.gunungAruna.comic.panels[1], imageUrl: 'https://i.ibb.co/gZXbsvYD/Gemini-Generated-Image-btt46gbtt46gbtt4.png', imageHint: 'boy grabbing go-bag' },
                    { ...contentDict.gunungAruna.comic.panels[2], imageUrl: 'https://i.ibb.co/3yDzK0xQ/Gemini-Generated-Image-1tzczx1tzczx1tzc.png', imageHint: 'boy helping grandmother' },
                    { ...contentDict.gunungAruna.comic.panels[3], imageUrl: 'https://i.ibb.co/Df1hFg0Y/Gemini-Generated-Image-7p5r3p7p5r3p7p5r.png', imageHint: 'community evacuating orderly' },
                    { ...contentDict.gunungAruna.comic.panels[4], imageUrl: 'https://i.ibb.co/99RRdFs0/Gemini-Generated-Image-67opkp67opkp67op.png', imageHint: 'people sharing food at evacuation center' },
                    { ...contentDict.gunungAruna.comic.panels[5], imageUrl: 'https://i.ibb.co/sJFV0tf2/Gemini-Generated-Image-vx0qqgvx0qqgvx0q.png', imageHint: 'boy smiling at village covered in ash' },
                ]
            },
        },
        'angin-puting-beliung': {
            video: {
                title: contentDict.anginPutingBeliung.video.title,
                description: contentDict.anginPutingBeliung.video.description,
                embedUrl: '',
                info: contentDict.anginPutingBeliung.video.info,
            },
            quiz: contentDict.anginPutingBeliung.quiz,
            comic: {
                ...contentDict.anginPutingBeliung.comic,
                panels: [
                    { ...contentDict.anginPutingBeliung.comic.panels[0], imageUrl: 'https://i.ibb.co/hR2wMXyx/Gemini-Generated-Image-91p8ky91p8ky91p8.png', imageHint: 'dark swirling clouds village' },
                    { ...contentDict.anginPutingBeliung.comic.panels[1], imageUrl: 'https://i.ibb.co/M5GnkqHr/Gemini-Generated-Image-11nkp911nkp911nk.png', imageHint: 'family running indoors' },
                    { ...contentDict.anginPutingBeliung.comic.panels[2], imageUrl: 'https://i.ibb.co/HLgXmSf1/Gemini-Generated-Image-22sohy22sohy22so.png', imageHint: 'person unplugging tv' },
                    { ...contentDict.anginPutingBeliung.comic.panels[3], imageUrl: 'https://i.ibb.co/7JWn81nK/Gemini-Generated-Image-sxr4t1sxr4t1sxr4.png', imageHint: 'woman holding go-bag' },
                    { ...contentDict.anginPutingBeliung.comic.panels[4], imageUrl: 'https://i.ibb.co/Ng9pxhZZ/Gemini-Generated-Image-lfqodrlfqodrlfqo.png', imageHint: 'community cleaning debris' },
                    { ...contentDict.anginPutingBeliung.comic.panels[5], imageUrl: 'https://i.ibb.co/M5x6GHsX/Gemini-Generated-Image-jxn6b6jxn6b6jxn6.png', imageHint: 'children learning from adult' },
                ]
            },
        },
        'likuifaksi-palu': {
            video: {
                title: contentDict.likuifaksiPalu.video.title,
                description: contentDict.likuifaksiPalu.video.description,
                embedUrl: '',
                info: contentDict.likuifaksiPalu.video.info,
            },
            quiz: contentDict.likuifaksiPalu.quiz,
            comic: {
                ...contentDict.likuifaksiPalu.comic,
                panels: [
                    { ...contentDict.likuifaksiPalu.comic.panels[0], imageUrl: 'https://i.ibb.co/zV44g8Dk/Gemini-Generated-Image-h7i01nh7i01nh7i0.png', imageHint: 'girl studying earthquake shaking' },
                    { ...contentDict.likuifaksiPalu.comic.panels[1], imageUrl: 'https://i.ibb.co/XZTGJDYT/Gemini-Generated-Image-q17tfuq17tfuq17t.png', imageHint: 'receding sea ocean floor' },
                    { ...contentDict.likuifaksiPalu.comic.panels[2], imageUrl: 'https://i.ibb.co/C3ChpdFv/Gemini-Generated-Image-27psyz27psyz27ps.png', imageHint: 'family running uphill' },
                    { ...contentDict.likuifaksiPalu.comic.panels[3], imageUrl: 'https://i.ibb.co/fGL6wzzw/Gemini-Generated-Image-odapizodapizodap.png', imageHint: 'tsunami wave hitting city view from hill' },
                    { ...contentDict.likuifaksiPalu.comic.panels[4], imageUrl: 'https://i.ibb.co/spJdByRz/Gemini-Generated-Image-pjmczopjmczopjmc.png', imageHint: 'ground turning to mud liquefaction' },
                    { ...contentDict.likuifaksiPalu.comic.panels[5], imageUrl: 'https://i.ibb.co/Pvswyk53/Gemini-Generated-Image-z5j73ez5j73ez5j7.png', imageHint: 'girl looking at evacuation route map' },
                ]
            },
        }
    };
};


export const getMasterQuiz = (dict: Dictionary): Quiz => {
    const allQuestions = [
        ...getInteractiveContent(dict)['smong-selamat-dari-lautan'].quiz!.questions,
        ...getInteractiveContent(dict)['bah-tangse-sungai-murka'].quiz!.questions,
        ...getInteractiveContent(dict)['kopi-gayo-aroma-perdamaian'].quiz!.questions,
        ...getInteractiveContent(dict)['hutan-bakau-penjaga-pantai'].quiz!.questions,
        ...getInteractiveContent(dict)['dapur-umum-perdamaian'].quiz!.questions,
        ...getInteractiveContent(dict)['lumbung-padi-komunal'].quiz!.questions,
        ...getInteractiveContent(dict)['api-di-bukit-barisan'].quiz!.questions,
        ...getInteractiveContent(dict)['pemuda-penjaga-adat'].quiz!.questions,
        ...getInteractiveContent(dict)['perempuan-penganyam-harapan'].quiz!.questions,
        ...getInteractiveContent(dict)['arsitektur-rumah-panggung'].quiz!.questions,
        ...getInteractiveContent(dict)['seni-melawan-trauma'].quiz!.questions,
        ...getInteractiveContent(dict)['nelayan-dan-tanda-alam'].quiz!.questions,
        ...getInteractiveContent(dict)['sumur-tua-sumber-kehidupan'].quiz!.questions,
        ...getInteractiveContent(dict)['ilmu-falak-di-pesantren'].quiz!.questions,
        ...getInteractiveContent(dict)['pasar-sebagai-ruang-sosial'].quiz!.questions,
        ...getInteractiveContent(dict)['siaga-si-kucing-cerdas'].quiz!.questions,
        ...getInteractiveContent(dict)['gunung-aruna-siap-siaga'].quiz!.questions,
        ...getInteractiveContent(dict)['angin-puting-beliung'].quiz!.questions,
        ...getInteractiveContent(dict)['likuifaksi-palu'].quiz!.questions,
    ];

    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    
    return {
        title: dict.interactive.masterQuiz,
        description: dict.interactive.masterQuizDescription,
        questions: selected
    }
};

    
