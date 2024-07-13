import '@styles/globals.css';

export const metadata = {
    title: "Promptopia",
    description: "AI Promps Fullstack Next.js App"
}

const RootLayout = ({ children }) => {
    return (
        <html>
            <body>
                <div className='main'>
                    <div className='gradiant' />
                </div>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout