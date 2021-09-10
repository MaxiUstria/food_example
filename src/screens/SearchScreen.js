import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price == price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultList results={filterResultsByPrice("$$$")} title="Big Expensive" />
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
