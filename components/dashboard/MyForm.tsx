'use client'

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form';
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {Post} from '@/types/posts';
import { toast } from "sonner";



const formSchema = z.object({
    title: z.string().min(1, {
        message: 'Title is required'
    }),
    body: z.string().min(1, {
        message: 'Body is required'
    }),
    author: z.string().min(1, {
        message: 'Author is required'
    }),
    date: z.string().min(1, {
        message: 'Date is required'
    }),
})

interface MyFormProps {
    post?: Post
}



const MyForm = ({post}: MyFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: post?.title || '',
            body: post?.body || '',
            author: post?.author || '',
            date: post?.date || '',
        }
    })

    const handleSubmit = (data: z.infer<typeof formSchema>) =>{
        toast('Post has been updated successfully.', {
            description: `Updated by ${post?.author}`
        });
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className='space-y-6'>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='uppercase text-xs font-bold 
                                text-zinc-500 dark:text-white'>
                                Title
                            </FormLabel>
                            <FormControl>
                                <Input className='bg-slate-100 text-black border-0 
                                focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-500' 
                                placeholder="Enter title" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="author"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='uppercase text-xs font-bold 
                                text-zinc-500 dark:text-white'>
                                Author
                            </FormLabel>
                            <FormControl>
                                <Input className='bg-slate-100 text-black border-0 
                                focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-500' 
                                placeholder="Enter author" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='uppercase text-xs font-bold 
                                text-zinc-500 dark:text-white'>
                                Date
                            </FormLabel>
                            <FormControl>
                                <Input className='bg-slate-100 text-black border-0 
                                focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-500' 
                                placeholder="Enter date" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className='uppercase text-xs font-bold 
                                text-zinc-500 dark:text-white'>
                                Body
                            </FormLabel>
                            <FormControl>
                                <Textarea className='bg-slate-100 text-black border-0 
                                focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-500' 
                                placeholder="Enter title" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button className='w-full dark:bg-slate-800 dark:text-white'>Update Post</Button>

                    
                </form>
            </Form>
        </div>
    );
};

export default MyForm;