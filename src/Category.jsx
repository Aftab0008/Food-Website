import { RiGalleryView2 } from "react-icons/ri";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdSoupKitchen } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { CiForkAndKnife } from "react-icons/ci";
import { GiFullPizza } from "react-icons/gi";
import { LiaHamburgerSolid } from "react-icons/lia";
const Categories=[
    {
        id:1,
        name:"All",
        icon:<RiGalleryView2 className="w-[60px]
         h-[60px] text-green-800 " />
    },

    {
        id:2,
        name:"BreakFast",
        icon:<MdOutlineFreeBreakfast className="w-[60px]
        h-[60px] text-green-800 " />
    },

    {
        id:3,
        name:"Soups",
        icon:<MdSoupKitchen className="w-[60px]
        h-[60px] text-green-800 "/>

    },

    {
        id:4,
        name:"Pasta",
        icon:<CiBowlNoodles className="w-[60px]
        h-[60px] text-green-800 " />
    },

    {
        id:5,
        name:"Main_Course",
        icon:<CiForkAndKnife className="w-[60px]
        h-[60px] text-green-800 "/>
    },

    {
        id:6,
        name:"Pizza",
        icon:<GiFullPizza  className="w-[60px]
        h-[60px] text-green-800 "/>
    },

    {
        id:7,
        name:"Burger",
        icon:<LiaHamburgerSolid  className="w-[60px]
        h-[60px] text-green-800 "/>
    },
]
export default Categories