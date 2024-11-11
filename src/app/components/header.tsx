import Image from 'next/image';

export default function Page() {
    return (
        <header className="bg-black">
            <nav className="mx-auto flex items-center justify-between p-5">
                <div>
                    <Image
                        className="h-8 w-auto"
                        src="https://th.bing.com/th/id/OIP.jUR0o2MTDqRt4gkr-_H5eQAAAA?w=250&h=155&rs=1&pid=ImgDetMain"
                        alt="Logo"
                        width={32}
                        height={32}
                    />
                </div>
            </nav>
        </header>
    )
}
