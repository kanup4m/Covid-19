import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend
} from 'recharts';
// const data = [
//     {
//         name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//     },
//     {
//         name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//     },
//     {
//         name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//     },
//     {
//         name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//     },
//     {
//         name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//     },
//     {
//         name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//     },
//     {
//         name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//     },
// ];
const data = [
    {
        "updated_at": "2020-04-08T05:49:38.454Z",
        "date": "2020-04-08",
        "deaths": 81968,
        "confirmed": 1425235,
        "recovered": 300921,
        "active": 1042346,
        "new_confirmed": 313,
        "new_recovered": 1552,
        "new_deaths": 122,
        "is_in_progress": true
    },
    {
        "updated_at": "2020-04-07T21:11:31.000Z",
        "date": "2020-04-07",
        "deaths": 81846,
        "confirmed": 1424922,
        "recovered": 299369,
        "new_confirmed": 80963,
        "new_recovered": 23520,
        "new_deaths": 7297,
        "active": 1043707
    },
    {
        "updated_at": "2020-04-06T21:28:35.000Z",
        "date": "2020-04-06",
        "deaths": 74549,
        "confirmed": 1343959,
        "recovered": 275849,
        "new_confirmed": 0,
        "new_recovered": 0,
        "new_deaths": 0,
        "active": 993561
    },
    {
        "updated_at": "2020-04-06T21:28:00.000Z",
        "date": "2020-04-05",
        "deaths": 143907,
        "confirmed": 2614950,
        "recovered": 535194,
        "new_confirmed": 147648,
        "new_recovered": 30362,
        "new_deaths": 9962,
        "active": 1935849
    },
    {
        "updated_at": "2020-04-04T21:41:02.000Z",
        "date": "2020-04-04",
        "deaths": 64590,
        "confirmed": 1196311,
        "recovered": 245496,
        "new_confirmed": 101455,
        "new_recovered": 20351,
        "new_deaths": 5820,
        "active": 886225
    },
    {
        "updated_at": "2020-04-03T20:52:45.000Z",
        "date": "2020-04-03",
        "deaths": 58771,
        "confirmed": 1094856,
        "recovered": 225146,
        "new_confirmed": 82726,
        "new_recovered": 15560,
        "new_deaths": 5804,
        "active": 810939
    },
    {
        "updated_at": "2020-04-02T21:32:01.000Z",
        "date": "2020-04-02",
        "deaths": 52967,
        "confirmed": 1012130,
        "recovered": 209616,
        "new_confirmed": 80520,
        "new_recovered": 17070,
        "new_deaths": 6174,
        "active": 749547
    },
    {
        "updated_at": "2020-04-01T20:04:58.000Z",
        "date": "2020-04-01",
        "deaths": 46793,
        "confirmed": 931610,
        "recovered": 192546,
        "new_confirmed": 75083,
        "new_recovered": 15408,
        "new_deaths": 4699,
        "active": 692271
    },
    {
        "updated_at": "2020-03-31T21:49:27.000Z",
        "date": "2020-03-31",
        "deaths": 42094,
        "confirmed": 856527,
        "recovered": 177407,
        "new_confirmed": 75100,
        "new_recovered": 13469,
        "new_deaths": 4524,
        "active": 637026
    },
    {
        "updated_at": "2020-03-30T20:58:55.000Z",
        "date": "2020-03-30",
        "deaths": 37570,
        "confirmed": 781427,
        "recovered": 163944,
        "new_confirmed": 62237,
        "new_recovered": 15484,
        "new_deaths": 3657,
        "active": 579913
    },
    {
        "updated_at": "2020-03-29T21:14:06.000Z",
        "date": "2020-03-29",
        "deaths": 33913,
        "confirmed": 719190,
        "recovered": 148460,
        "new_confirmed": 59395,
        "new_recovered": 9661,
        "new_deaths": 3273,
        "active": 536817
    },
    {
        "updated_at": "2020-03-28T22:11:06.000Z",
        "date": "2020-03-28",
        "deaths": 30640,
        "confirmed": 659795,
        "recovered": 138799,
        "new_confirmed": 67401,
        "new_recovered": 8499,
        "new_deaths": 3454,
        "active": 490356
    },
    {
        "updated_at": "2020-03-27T22:27:48.000Z",
        "date": "2020-03-27",
        "deaths": 27186,
        "confirmed": 592394,
        "recovered": 130300,
        "new_confirmed": 63670,
        "new_recovered": 8764,
        "new_deaths": 3228,
        "active": 434908
    },
    {
        "updated_at": "2020-03-26T22:53:24.000Z",
        "date": "2020-03-26",
        "deaths": 23958,
        "confirmed": 528724,
        "recovered": 121536,
        "new_confirmed": 61842,
        "new_recovered": 8409,
        "new_deaths": 2790,
        "active": 383230
    },
    {
        "updated_at": "2020-03-25T22:37:49.000Z",
        "date": "2020-03-25",
        "deaths": 21171,
        "confirmed": 466882,
        "recovered": 113183,
        "new_confirmed": 48918,
        "new_recovered": 5478,
        "new_deaths": 2556,
        "active": 332528
    },
    {
        "updated_at": "2020-03-24T22:41:50.000Z",
        "date": "2020-03-24",
        "deaths": 18615,
        "confirmed": 417964,
        "recovered": 107705,
        "new_confirmed": 40404,
        "new_recovered": 7367,
        "new_deaths": 2126,
        "active": 291644
    },
    {
        "updated_at": "2020-03-23T22:23:20.000Z",
        "date": "2020-03-23",
        "deaths": 16489,
        "confirmed": 377575,
        "recovered": 100391,
        "new_confirmed": 42501,
        "new_recovered": 3035,
        "new_deaths": 1867,
        "active": 260695
    },
    {
        "updated_at": "2020-03-22T22:43:03.000Z",
        "date": "2020-03-22",
        "deaths": 14621,
        "confirmed": 334762,
        "recovered": 97494,
        "new_confirmed": 31430,
        "new_recovered": 6215,
        "new_deaths": 1662,
        "active": 222649
    },
    {
        "updated_at": "2020-03-21T22:43:02.000Z",
        "date": "2020-03-21",
        "deaths": 12961,
        "confirmed": 303509,
        "recovered": 91346,
        "new_confirmed": 32361,
        "new_recovered": 4275,
        "new_deaths": 1677,
        "active": 199202
    },
    {
        "updated_at": "2020-03-20T22:13:09.000Z",
        "date": "2020-03-20",
        "deaths": 11289,
        "confirmed": 271122,
        "recovered": 87058,
        "new_confirmed": 29458,
        "new_recovered": 2471,
        "new_deaths": 1433,
        "active": 172775
    },
    {
        "updated_at": "2020-03-19T20:13:15.000Z",
        "date": "2020-03-19",
        "deaths": 9847,
        "confirmed": 241390,
        "recovered": 84623,
        "new_confirmed": 27799,
        "new_recovered": 1661,
        "new_deaths": 1136,
        "active": 146920
    },
    {
        "updated_at": "2020-03-18T18:53:03.000Z",
        "date": "2020-03-18",
        "deaths": 8719,
        "confirmed": 213506,
        "recovered": 82971,
        "new_confirmed": 17735,
        "new_recovered": 2473,
        "new_deaths": 828,
        "active": 121816
    },
    {
        "updated_at": "2020-03-17T22:33:02.000Z",
        "date": "2020-03-17",
        "deaths": 7890,
        "confirmed": 195637,
        "recovered": 80480,
        "new_confirmed": 15629,
        "new_recovered": 2757,
        "new_deaths": 779,
        "active": 107267
    },
    {
        "updated_at": "2020-03-16T22:53:02.000Z",
        "date": "2020-03-16",
        "deaths": 7103,
        "confirmed": 178565,
        "recovered": 77757,
        "new_confirmed": 14129,
        "new_recovered": 2062,
        "new_deaths": 691,
        "active": 93705
    },
    {
        "updated_at": "2020-03-15T17:20:19.000Z",
        "date": "2020-03-15",
        "deaths": 4585,
        "confirmed": 139751,
        "recovered": 73151,
        "new_confirmed": 7562,
        "new_recovered": 3028,
        "new_deaths": 253,
        "active": 62015
    },
    {
        "updated_at": "2020-03-14T22:33:02.000Z",
        "date": "2020-03-14",
        "deaths": 6178,
        "confirmed": 158781,
        "recovered": 72648,
        "new_confirmed": 14664,
        "new_recovered": 2757,
        "new_deaths": 783,
        "active": 79955
    },
    {
        "updated_at": "2020-03-13T22:53:03.000Z",
        "date": "2020-03-13",
        "deaths": 5397,
        "confirmed": 144527,
        "recovered": 69930,
        "new_confirmed": 16857,
        "new_recovered": 1929,
        "new_deaths": 682,
        "active": 69200
    },
    {
        "updated_at": "2020-03-12T22:44:32.000Z",
        "date": "2020-03-12",
        "deaths": 3810,
        "confirmed": 109467,
        "recovered": 66720,
        "new_confirmed": 2459,
        "new_recovered": 1313,
        "new_deaths": 103,
        "active": 38937
    },
    {
        "updated_at": "2020-03-11T22:53:02.000Z",
        "date": "2020-03-11",
        "deaths": 4613,
        "confirmed": 125252,
        "recovered": 66688,
        "new_confirmed": 7530,
        "new_recovered": 2402,
        "new_deaths": 360,
        "active": 53951
    },
    {
        "updated_at": "2020-03-10T22:53:02.000Z",
        "date": "2020-03-10",
        "deaths": 4252,
        "confirmed": 117569,
        "recovered": 64270,
        "new_confirmed": 4975,
        "new_recovered": 1832,
        "new_deaths": 271,
        "active": 49047
    },
    {
        "updated_at": "2020-03-09T22:33:02.000Z",
        "date": "2020-03-09",
        "deaths": 3987,
        "confirmed": 112077,
        "recovered": 62322,
        "new_confirmed": 3768,
        "new_recovered": 1817,
        "new_deaths": 193,
        "active": 45768
    },
    {
        "updated_at": "2020-03-08T21:03:11.000Z",
        "date": "2020-03-08",
        "deaths": 3796,
        "confirmed": 108774,
        "recovered": 60609,
        "new_confirmed": 3978,
        "new_recovered": 2353,
        "new_deaths": 245,
        "active": 44369
    },
    {
        "updated_at": "2020-03-07T19:43:03.000Z",
        "date": "2020-03-07",
        "deaths": 3551,
        "confirmed": 104783,
        "recovered": 58293,
        "new_confirmed": 4030,
        "new_recovered": 2493,
        "new_deaths": 98,
        "active": 42939
    },
    {
        "updated_at": "2020-03-06T19:43:03.000Z",
        "date": "2020-03-06",
        "deaths": 3453,
        "confirmed": 100872,
        "recovered": 55800,
        "new_confirmed": 3911,
        "new_recovered": 2039,
        "new_deaths": 112,
        "active": 41619
    },
    {
        "updated_at": "2020-03-05T22:53:02.000Z",
        "date": "2020-03-05",
        "deaths": 3339,
        "confirmed": 96973,
        "recovered": 53744,
        "new_confirmed": 2758,
        "new_recovered": 2626,
        "new_deaths": 94,
        "active": 39890
    },
    {
        "updated_at": "2020-03-04T20:13:07.000Z",
        "date": "2020-03-04",
        "deaths": 3245,
        "confirmed": 94071,
        "recovered": 51010,
        "new_confirmed": 2277,
        "new_recovered": 2942,
        "new_deaths": 94,
        "active": 39816
    },
    {
        "updated_at": "2020-03-03T22:53:03.000Z",
        "date": "2020-03-03",
        "deaths": 3152,
        "confirmed": 91910,
        "recovered": 48161,
        "new_confirmed": 2534,
        "new_recovered": 2627,
        "new_deaths": 75,
        "active": 40597
    },
    {
        "updated_at": "2020-03-02T22:53:02.000Z",
        "date": "2020-03-02",
        "deaths": 3078,
        "confirmed": 89450,
        "recovered": 45545,
        "new_confirmed": 1938,
        "new_recovered": 2886,
        "new_deaths": 89,
        "active": 40827
    },
    {
        "updated_at": "2020-03-01T22:43:03.000Z",
        "date": "2020-03-01",
        "deaths": 2989,
        "confirmed": 87549,
        "recovered": 42675,
        "new_confirmed": 2357,
        "new_recovered": 2934,
        "new_deaths": 55,
        "active": 41885
    },
    {
        "updated_at": "2020-02-29T22:13:06.000Z",
        "date": "2020-02-29",
        "deaths": 2934,
        "confirmed": 85217,
        "recovered": 39745,
        "new_confirmed": 1891,
        "new_recovered": 3071,
        "new_deaths": 69,
        "active": 42538
    },
    {
        "updated_at": "2020-02-28T20:03:02.000Z",
        "date": "2020-02-28",
        "deaths": 2865,
        "confirmed": 83208,
        "recovered": 36583,
        "new_confirmed": 1367,
        "new_recovered": 3434,
        "new_deaths": 56,
        "active": 43760
    },
    {
        "updated_at": "2020-02-27T22:33:02.000Z",
        "date": "2020-02-27",
        "deaths": 2808,
        "confirmed": 81795,
        "recovered": 33147,
        "new_confirmed": 1359,
        "new_recovered": 2893,
        "new_deaths": 44,
        "active": 45840
    },
    {
        "updated_at": "2020-02-26T22:53:02.000Z",
        "date": "2020-02-26",
        "deaths": 2765,
        "confirmed": 80579,
        "recovered": 30304,
        "new_confirmed": 968,
        "new_recovered": 2469,
        "new_deaths": 61,
        "active": 47510
    },
    {
        "updated_at": "2020-02-25T22:43:03.000Z",
        "date": "2020-02-25",
        "deaths": 2704,
        "confirmed": 79635,
        "recovered": 27853,
        "new_confirmed": 845,
        "new_recovered": 2678,
        "new_deaths": 79,
        "active": 49078
    },
    {
        "updated_at": "2020-02-24T22:43:01.000Z",
        "date": "2020-02-24",
        "deaths": 2624,
        "confirmed": 78657,
        "recovered": 25095,
        "new_confirmed": 585,
        "new_recovered": 1834,
        "new_deaths": 160,
        "active": 50938
    },
    {
        "updated_at": "2020-02-23T22:43:02.000Z",
        "date": "2020-02-23",
        "deaths": 2464,
        "confirmed": 78121,
        "recovered": 23303,
        "new_confirmed": 329,
        "new_recovered": 509,
        "new_deaths": 10,
        "active": 52354
    },
    {
        "updated_at": "2020-02-22T22:43:02.000Z",
        "date": "2020-02-22",
        "deaths": 2453,
        "confirmed": 77718,
        "recovered": 22758,
        "new_confirmed": 1756,
        "new_recovered": 3996,
        "new_deaths": 207,
        "active": 52507
    },
    {
        "updated_at": "2020-02-21T22:33:06.000Z",
        "date": "2020-02-21",
        "deaths": 2247,
        "confirmed": 76141,
        "recovered": 18845,
        "new_confirmed": 644,
        "new_recovered": 713,
        "new_deaths": 4,
        "active": 55049
    },
    {
        "updated_at": "2020-02-20T16:33:02.000Z",
        "date": "2020-02-20",
        "deaths": 2243,
        "confirmed": 75304,
        "recovered": 18050,
        "new_confirmed": 545,
        "new_recovered": 2056,
        "new_deaths": 123,
        "active": 55011
    },
    {
        "updated_at": "2020-02-19T22:43:02.000Z",
        "date": "2020-02-19",
        "deaths": 2120,
        "confirmed": 74834,
        "recovered": 16031,
        "new_confirmed": 424,
        "new_recovered": 1768,
        "new_deaths": 115,
        "active": 56683
    },
    {
        "updated_at": "2020-02-18T16:23:04.000Z",
        "date": "2020-02-18",
        "deaths": 2004,
        "confirmed": 74435,
        "recovered": 14285,
        "new_confirmed": 1790,
        "new_recovered": 1769,
        "new_deaths": 139,
        "active": 58146
    },
    {
        "updated_at": "2020-02-17T22:43:01.000Z",
        "date": "2020-02-17",
        "deaths": 1866,
        "confirmed": 72688,
        "recovered": 12537,
        "new_confirmed": 1935,
        "new_recovered": 1718,
        "new_deaths": 98,
        "active": 58285
    },
    {
        "updated_at": "2020-02-16T19:43:02.000Z",
        "date": "2020-02-16",
        "deaths": 1768,
        "confirmed": 70751,
        "recovered": 10825,
        "new_confirmed": 2124,
        "new_recovered": 1470,
        "new_deaths": 104,
        "active": 58158
    },
    {
        "updated_at": "2020-02-15T22:53:02.000Z",
        "date": "2020-02-15",
        "deaths": 1665,
        "confirmed": 68618,
        "recovered": 9355,
        "new_confirmed": 2078,
        "new_recovered": 1337,
        "new_deaths": 143,
        "active": 57598
    },
    {
        "updated_at": "2020-02-14T22:53:02.000Z",
        "date": "2020-02-14",
        "deaths": 1522,
        "confirmed": 66473,
        "recovered": 8005,
        "new_confirmed": 6474,
        "new_recovered": 1763,
        "new_deaths": 152,
        "active": 56946
    },
    {
        "updated_at": "2020-02-13T17:53:02.000Z",
        "date": "2020-02-13",
        "deaths": 1370,
        "confirmed": 60098,
        "recovered": 6275,
        "new_confirmed": 15148,
        "new_recovered": 1145,
        "new_deaths": 253,
        "active": 52453
    },
    {
        "updated_at": "2020-02-12T18:53:02.000Z",
        "date": "2020-02-12",
        "deaths": 1118,
        "confirmed": 44908,
        "recovered": 5124,
        "new_confirmed": 379,
        "new_recovered": 467,
        "new_deaths": 5,
        "active": 38666
    },
    {
        "updated_at": "2020-02-11T18:33:03.000Z",
        "date": "2020-02-11",
        "deaths": 1112,
        "confirmed": 44582,
        "recovered": 4679,
        "new_confirmed": 2040,
        "new_recovered": 737,
        "new_deaths": 100,
        "active": 38791
    },
    {
        "updated_at": "2020-02-10T22:03:09.000Z",
        "date": "2020-02-10",
        "deaths": 1012,
        "confirmed": 42500,
        "recovered": 3929,
        "new_confirmed": 2541,
        "new_recovered": 702,
        "new_deaths": 107,
        "active": 37559
    },
    {
        "updated_at": "2020-02-09T19:33:03.000Z",
        "date": "2020-02-09",
        "deaths": 905,
        "confirmed": 39981,
        "recovered": 3231,
        "new_confirmed": 3027,
        "new_recovered": 628,
        "new_deaths": 100,
        "active": 35845
    },
    {
        "updated_at": "2020-02-08T11:53:01.000Z",
        "date": "2020-02-08",
        "deaths": 805,
        "confirmed": 36944,
        "recovered": 2612,
        "new_confirmed": 2729,
        "new_recovered": 605,
        "new_deaths": 87,
        "active": 33527
    },
    {
        "updated_at": "2020-02-07T17:33:02.000Z",
        "date": "2020-02-07",
        "deaths": 719,
        "confirmed": 34245,
        "recovered": 2004,
        "new_confirmed": 3533,
        "new_recovered": 524,
        "new_deaths": 85,
        "active": 31522
    },
    {
        "updated_at": "2020-02-06T14:03:04.000Z",
        "date": "2020-02-06",
        "deaths": 633,
        "confirmed": 30695,
        "recovered": 1482,
        "new_confirmed": 3182,
        "new_recovered": 363,
        "new_deaths": 70,
        "active": 28580
    },
    {
        "updated_at": "2020-02-05T15:33:03.000Z",
        "date": "2020-02-05",
        "deaths": 563,
        "confirmed": 27516,
        "recovered": 1115,
        "new_confirmed": 3744,
        "new_recovered": 272,
        "new_deaths": 72,
        "active": 25838
    },
    {
        "updated_at": "2020-02-04T15:43:03.000Z",
        "date": "2020-02-04",
        "deaths": 491,
        "confirmed": 23833,
        "recovered": 851,
        "new_confirmed": 4011,
        "new_recovered": 229,
        "new_deaths": 66,
        "active": 22491
    },
    {
        "updated_at": "2020-02-03T20:43:02.000Z",
        "date": "2020-02-03",
        "deaths": 425,
        "confirmed": 19750,
        "recovered": 615,
        "new_confirmed": 3094,
        "new_recovered": 151,
        "new_deaths": 64,
        "active": 18710
    },
    {
        "updated_at": "2020-02-02T21:33:07.000Z",
        "date": "2020-02-02",
        "deaths": 362,
        "confirmed": 16694,
        "recovered": 465,
        "new_confirmed": 4749,
        "new_recovered": 188,
        "new_deaths": 103,
        "active": 15867
    },
    {
        "updated_at": "2020-02-01T22:43:02.000Z",
        "date": "2020-02-01",
        "deaths": 259,
        "confirmed": 12049,
        "recovered": 283,
        "new_confirmed": 1,
        "new_recovered": 0,
        "new_deaths": 0,
        "active": 11507
    },
    {
        "updated_at": "2020-02-01T18:43:00.000Z",
        "date": "2020-01-31",
        "deaths": 472,
        "confirmed": 22008,
        "recovered": 511,
        "new_confirmed": 2113,
        "new_recovered": 62,
        "new_deaths": 46,
        "active": 21025
    },
    {
        "updated_at": "2020-01-31T22:59:00.000Z",
        "date": "2020-01-30",
        "deaths": 384,
        "confirmed": 18160,
        "recovered": 365,
        "new_confirmed": 1690,
        "new_recovered": 79,
        "new_deaths": 42,
        "active": 17411
    },
    {
        "updated_at": "2020-01-30T15:00:00.000Z",
        "date": "2020-01-29",
        "deaths": 304,
        "confirmed": 14400,
        "recovered": 269,
        "new_confirmed": 2070,
        "new_recovered": 17,
        "new_deaths": 38,
        "active": 13827
    },
    {
        "updated_at": "2020-01-29T18:30:00.000Z",
        "date": "2020-01-28",
        "deaths": 264,
        "confirmed": 11743,
        "recovered": 233,
        "new_confirmed": 587,
        "new_recovered": 19,
        "new_deaths": 2,
        "active": 11246
    },
    {
        "updated_at": "2020-01-28T22:00:00.000Z",
        "date": "2020-01-27",
        "deaths": 213,
        "confirmed": 8504,
        "recovered": 168,
        "new_confirmed": 2652,
        "new_recovered": 46,
        "new_deaths": 49,
        "active": 8123
    },
    {
        "updated_at": "2020-01-27T22:59:00.000Z",
        "date": "2020-01-26",
        "deaths": 138,
        "confirmed": 5044,
        "recovered": 113,
        "new_confirmed": 808,
        "new_recovered": 9,
        "new_deaths": 26,
        "active": 4793
    },
    {
        "updated_at": "2020-01-26T15:00:00.000Z",
        "date": "2020-01-25",
        "deaths": 98,
        "confirmed": 3556,
        "recovered": 91,
        "new_confirmed": 680,
        "new_recovered": 13,
        "new_deaths": 14,
        "active": 3367
    },
    {
        "updated_at": "2020-01-25T16:00:00.000Z",
        "date": "2020-01-24",
        "deaths": 68,
        "confirmed": 2379,
        "recovered": 75,
        "new_confirmed": 497,
        "new_recovered": 3,
        "new_deaths": 16,
        "active": 2236
    },
    {
        "updated_at": "2020-01-24T16:00:00.000Z",
        "date": "2020-01-23",
        "deaths": 44,
        "confirmed": 1594,
        "recovered": 66,
        "new_confirmed": 288,
        "new_recovered": 6,
        "new_deaths": 8,
        "active": 1484
    },
    {
        "updated_at": "2020-01-23T16:00:00.000Z",
        "date": "2020-01-22",
        "deaths": 35,
        "confirmed": 1208,
        "recovered": 58,
        "new_confirmed": 99,
        "new_recovered": 2,
        "new_deaths": 1,
        "active": 1115
    },
    {
        "updated_at": "2020-01-22T16:00:00.000Z",
        "date": "2020-01-21",
        "deaths": 17,
        "confirmed": 555,
        "recovered": 28,
        "new_confirmed": 555,
        "new_recovered": 28,
        "new_deaths": 17,
        "active": 510
    }
]
const Chart = () => {
    return (
        <div>
            <LineChart
                width={300}
                height={300}
                data={data}
                margin={{
                    top: 45, right: 30, left: 30, bottom: 45,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="deaths" stroke="#c53030" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="confirmed" stroke="#4a5568" />
                <Line type="monotone" dataKey="recovered" stroke="#276749" />
                <Line type="monotone" dataKey="active" stroke="#718096" />

            </LineChart>


        </div>
    );
}

export default Chart;