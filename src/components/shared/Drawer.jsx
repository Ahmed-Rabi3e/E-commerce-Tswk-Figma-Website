import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
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
                <div className="mx-auto w-full max-w-sm p-8">
                    <FilterSidebar setSearchParams={setSearchParams} mobile={false} />
                </div>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button>Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
