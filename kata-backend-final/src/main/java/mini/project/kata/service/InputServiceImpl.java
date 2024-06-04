package mini.project.kata.service;


import org.springframework.stereotype.Service;

@Service
public class InputServiceImpl implements InputService {
    @Override
    public String transformNumberToString(int input) {
        if (input <= 0 || input > 100) {
            throw new IllegalArgumentException("Le nombre doit être compris entre 0 et 100");
        }

        StringBuilder result = new StringBuilder();
        String numStr = String.valueOf(input);

        // Vérifier la divisibilité par 3 et 5
        boolean isDivisibleBy3 = input % 3 == 0;
        boolean isDivisibleBy5 = input % 5 == 0;

        // Appliquer la règle de divisibilité prioritairement
        if (isDivisibleBy3) {
            result.append("FOO");
        }
        if (isDivisibleBy5) {
            result.append("BAR");
        }

        // vérifier la présence des chiffres
        for (char c : numStr.toCharArray()) {
            if (c == '3') {
                result.append("FOO");
            }
            if (c == '5') {
                result.append("BAR");
            }
            if (c == '7') {
                result.append("QUIX");
            }
        }


        // Si aucune règle n'a été appliquée, retourner le nombre sous forme de chaîne
        if (result.isEmpty()) {
            result.append(numStr);
        }

        return result.toString();
    }
}
