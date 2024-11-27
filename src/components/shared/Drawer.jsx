import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTitle,
    DrawerTrigger,
    DrawerDescription
} from "@/components/ui/drawer"
import { HiArrowsUpDown } from "react-icons/hi2";
import FilterSidebar from "@/pages/Products/FilterSidebar";



export function DrawerDemo({ setSearchParams }) {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline" className='rounded-md px-3 block lg:hidden'><HiArrowsUpDown /></Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto font-din">
                    <DrawerTitle className='text-center my-2 text-xl font-bold'>تصنيفات</DrawerTitle>
                    <FilterSidebar setSearchParams={setSearchParams} mobile={false} />
                </div>
                <DrawerDescription>
                </DrawerDescription>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <button className="bg-main px-28 py-2 rounded-3xl text-white w-fit mx-auto">تطبيق</button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
