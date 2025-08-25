export function DashboardPreview() {
    return (
        <div className="w-[calc(100vw-32px)] md:w-[1160px]">
            <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
                <video
                    src="/Pixel.mp4"
                    width={560}
                    height={700}
                    className="w-full h-full object-cover aspect-video rounded-xl shadow-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    Votre navigateur ne supporte pas les vidéos HTML5.
                </video>
            </div>
        </div>
    )
}