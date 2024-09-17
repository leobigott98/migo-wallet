import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

type Props = {
  transactionDate: Date;
  amount: number;
  transactionType: string;
  icon: React.ReactNode;
  transactionName: string;
  id: string
};

export default function TransactionCard({
  transactionDate,
  amount,
  transactionType,
  icon,
  transactionName,
  id
}: Props) {
  return (
    <Link
      href={{
        pathname: "/transaction/[id]",
        params: { id: id },
      }}
      asChild
    >
      <Pressable>
        {({ pressed }) => (
          <View
            style={
              pressed
                ? [{ backgroundColor: "lightgray" }, styles.transaction]
                : [{ backgroundColor: "white" }, styles.transaction]
            }
          >
            <View style={{ position: "relative", left: 20 }}>{icon}</View>
            <View style={{ position: "relative", left: 40, width: 140 }}>
              <Text style={{ fontWeight: "bold", fontSize: 16, margin: 2 }}>
                {transactionName}
              </Text>
              <Text style={{ fontSize: 12, color: "grey", margin: 2 }}>
                {transactionDate.toDateString()}
              </Text>
              <Text style={{ fontSize: 12, margin: 2, position: "relative" }}>
                {transactionType}
              </Text>
            </View>
            <View
              style={{ position: "relative", left: 40, marginHorizontal: 20 }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  margin: 2,
                  color: amount > 0 ? "green" : "red",
                }}
              >
                {amount > 0 ? "+" : "-"}${amount > 0 ? amount : amount * -1}
              </Text>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  transaction: {
    display: "flex",
    flexDirection: "row",
    width: 320,
    height: 95,
    //borderBottomColor: "lightgray",
    //borderBottomWidth: 1,
    alignItems: "center",
    //justifyContent: 'center'
  },
});
