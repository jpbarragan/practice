
import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");


        //Practice Array
        String[] planets = new String[8];

        planets[0] = "Mercurio";
        planets[1] = "Venus";
        planets[2] = "Tierra";
        planets[3] = "Marte";
        planets[4] = "Jupiter";
        planets[5] = "Saturno";
        planets[6] = "Urano";
        planets[7] = "Neptuno";

        System.out.println(planets[0]);
        System.out.println(planets);
        System.out.println(Arrays.toString(planets));

        // Practice loop
        for (int i = 0; i < planets.length; i++){
            System.out.println(planets[i]);
        }

        //Practice ArrayList

        ArrayList<String> days = new ArrayList<>();

        days.add("lunes");
        days.add("martes");
        days.add("miercoles");
        days.add("jueves");
        days.add("viernes");

        System.out.println(days);
        System.out.println(days.size());
        System.out.println(days.contains("lunes"));
        Collections.sort(days);
        System.out.println(days);

        // Practice for each loop
        for (String day : days){
            System.out.println(day);
        }


        //Practice Hashmaps
        HashMap<String, Integer> scores = new HashMap<>();

        scores.put("John", 4);
        scores.put("Maria", 10);
        scores.put("Evelyn", 1);
        scores.put("Jakob", 7);

        System.out.println(scores);
        System.out.println(scores.size());
        System.out.println(scores.entrySet());
        System.out.println(scores.keySet());
        System.out.println(scores.values());
        System.out.println(scores.containsKey("John"));
        System.out.println(scores.containsValue(5));

        // Practice map method with hashmap
        for (String key : scores.keySet()){
            System.out.println(key);
        }

        for (Integer value : scores.values()){
            System.out.println(value);
        }

        for (Map.Entry<String, Integer> entry : scores.entrySet()){
            System.out.println("The student named " + entry.getKey() + " has a grade of " + entry.getValue() + " points.");
        }

        //Practice input and conditionals

//        Scanner input = new Scanner(System.in);
//        System.out.println("Please enter your name:");
//        String name = input.nextLine();
//
//        if (name.equals("Pepe")){
//            System.out.println("Hello Pepe, nice to have you back");
//        } else {
//            System.out.println("Nice to meet you, " + name + "!");
//        }

        // Create Library arraylist

        Book book1 = new Book("Don Quijote", "Cervantes", 600);

        System.out.println(book1.getTitle() + " is a book by " + book1.getAuthor() + " and has " + book1.getPages() + " pages.");
        System.out.println(book1.toString());

        Booklet booklet = new Booklet("Manual de reparaciones", "Cualquiera", 20, "MIT");
        System.out.println(booklet.getTitle());
        System.out.println(booklet.toString());

    }
}