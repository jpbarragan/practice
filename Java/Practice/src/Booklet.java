public class Booklet extends Book{

    private String press;

    public Booklet(String title, String author, Integer pages, String press) {
        super(title, author, pages);
        this.press = press;
    }
}
