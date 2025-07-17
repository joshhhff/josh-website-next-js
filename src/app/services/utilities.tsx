export default abstract class Utilities {
    private static prevIndex = 0;

    // retrieve random banner image without repeating the same image twice in a row
    static async getRandomBannerImage (): Promise<string> {
        const bannerImages = [
            '/Banners/Banner1.jpg',
            '/Banners/Banner2.jpg',
            '/Banners/Banner3.jpg',
            '/Banners/Banner4.jpg',
            '/Banners/Banner5.jpg',
        ];

        let randomIndex;
        while (true) {
            randomIndex = Math.floor(Math.random() * bannerImages.length);
            if (randomIndex !== Utilities.prevIndex) {
                Utilities.prevIndex = randomIndex;
                break;
            }
        }

        return bannerImages[randomIndex];
    }
}