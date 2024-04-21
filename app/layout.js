import './globals.css'

export const metadata = {
    title: 'Trip meter',
    manifest: '/manifest.json'
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{ children }</body>
        </html>
    )
}
