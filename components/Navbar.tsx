import Image from 'next/image';
import Link from 'next/link';
import img from '../img/logo.png';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggler from "@/components/ThemeToggler"

const Navbar = () => {
    return (
        <div className='bg-primary py-2 px-5 flex justify-between text-white dark:bg-slate-700 '> 
            <Link href='/'>
                <Image src={img} alt='logo image' width={40} />
            </Link>
            
            <div className="flex items-center">
                <ThemeToggler />

                <DropdownMenu>
                    <DropdownMenuTrigger className='focus:outline-none'>
                        <Avatar>
                            <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
                            <AvatarFallback className='text-black'>BT</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href='/profile'>Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='text-red-600 hover:text-red-400'>
                            <Link href='/auth'>Logout</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
};

export default Navbar;