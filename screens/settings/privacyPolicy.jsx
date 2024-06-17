import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Menu from "../../components/Menu.jsx";
import { Ionicons } from "@expo/vector-icons";

const PrivacyPolicy = ({ navigation }) => {
  const policyText = `
  Politique de confidentialité

  Introduction
  Nous respectons votre vie privée et nous nous engageons à la protéger en conformité avec cette politique de confidentialité. Cette politique décrit les types d'informations que nous pouvons collecter auprès de vous ou que vous pouvez fournir lorsque vous visitez notre site web, et nos pratiques de collecte, d'utilisation, de maintenance, de protection et de divulgation de ces informations.

  Informations que nous recueillons à votre sujet
  Nous recueillons plusieurs types d'informations de et à propos des utilisateurs de notre site web, y compris :
  - Les informations par lesquelles vous pouvez être identifié personnellement, comme le nom, l'adresse postale, l'adresse e-mail, le numéro de téléphone ("informations personnelles").
  - Les informations qui sont à propos de vous mais individuellement ne vous identifient pas.
  - Les informations sur votre connexion internet, l'équipement que vous utilisez pour accéder à notre site web et les détails d'utilisation.

  Comment nous recueillons ces informations
  Nous recueillons ces informations :
  - Directement de vous lorsque vous nous les fournissez.
  - Automatiquement lorsque vous naviguez sur le site. Les informations recueillies automatiquement peuvent inclure des détails d'utilisation, des adresses IP et des informations collectées via des cookies et d'autres technologies de suivi.

  Utilisation des informations
  Nous utilisons les informations que nous recueillons à votre sujet ou que vous nous fournissez, y compris les informations personnelles :
  - Pour présenter notre site web et son contenu.
  - Pour vous fournir les informations, produits ou services que vous nous demandez.
  - Pour remplir toute autre fin pour laquelle vous les fournissez.
  - Pour vous informer des modifications apportées à notre site web ou à tout produit ou service que nous offrons ou fournissons.
  - De toute autre manière que nous pouvons décrire lorsque vous fournissez les informations.
  - Pour toute autre fin avec votre consentement.

  Divulgation de vos informations
  Nous pouvons divulguer des informations agrégées sur nos utilisateurs, et des informations qui ne permettent pas d'identifier une personne, sans restriction. Nous pouvons divulguer les informations personnelles que nous recueillons ou que vous fournissez comme décrit dans cette politique de confidentialité :
  - À nos filiales et affiliés.
  - Aux sous-traitants, prestataires de services et autres tiers que nous utilisons pour soutenir notre activité.
  - Pour remplir la fin pour laquelle vous les fournissez.
  - Pour toute autre fin divulguée par nous lorsque vous fournissez les informations.
  - Avec votre consentement.

  Sécurité des données
  Nous avons mis en place des mesures conçues pour sécuriser vos informations personnelles contre toute perte accidentelle et contre tout accès, utilisation, modification et divulgation non autorisés. La sécurité de vos informations dépend également de vous. Lorsque nous vous avons donné (ou lorsque vous avez choisi) un mot de passe pour accéder à certaines parties de notre site web, vous êtes responsable de la confidentialité de ce mot de passe. Nous vous demandons de ne partager votre mot de passe avec personne.

  Modifications de notre politique de confidentialité
  Notre politique est de publier toute modification que nous apportons à notre politique de confidentialité sur cette page. La date de la dernière révision de la politique de confidentialité est identifiée en haut de la page. Vous êtes responsable de vous assurer que nous disposons d'une adresse e-mail active et livrable à jour, et de visiter périodiquement notre site web et cette politique de confidentialité pour vérifier les éventuels changements.

  Contact
  Pour poser des questions ou commenter cette politique de confidentialité et nos pratiques de confidentialité, contactez-nous à l'adresse suivante : privacy@healfing.com
  `;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Politique de confidentialité</Text>
        <Text style={styles.policyText}>{policyText}</Text>
      </ScrollView>

      <View style={styles.footer}>
        <Menu navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#120B2D",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#3F317E",
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  policyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "justify",
    lineHeight: 20,
  },
  footer: {
    backgroundColor: "#3F317E",
    padding: 10,
  },
});

export default PrivacyPolicy;
