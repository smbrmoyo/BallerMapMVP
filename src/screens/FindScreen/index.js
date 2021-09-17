import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Platform,
  TouchableHighlight,
  Keyboard,
} from "react-native";
import algoliasearch from "algoliasearch/lite";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  InstantSearch,
  connectMenu,
  connectRefinementList,
  connectSearchBox,
  connectRange,
} from "react-instantsearch-native";
import Stats from "./Stats";
import Highlight from "./Highlight";
import Spinner from "./Spinner";
import places from "../../assets/data/places";

const searchClient = algoliasearch(
  "8ME2TD4ATH",
  "43c16f5cb5ad21820b506a7f9c74ded0"
);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    minHeight: 41,
    padding: 11,
  },
  itemRefined: {
    fontWeight: "bold",
  },
  searchBoxContainer: {
    backgroundColor: "#162331",
  },
  searchBox: {
    backgroundColor: "white",
    height: 40,
    flex: 1,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    ...Platform.select({
      ios: {
        borderRadius: 5,
      },
      android: {},
    }),
  },
});

class Filters extends Component {
  static displayName = "React Native example";

  constructor(props) {
    super(props);
    this.onSearchStateChange = this.onSearchStateChange.bind(this);
    this.state = {
      searchState: props.searchState,
    };
  }

  onSearchStateChange(nextState) {
    const searchState = { ...this.state.searchState, ...nextState };
    this.setState({ searchState });
    this.props.onSearchStateChange(searchState);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <InstantSearch
          searchClient={searchClient}
          indexName="places_BallerMap"
          onSearchStateChange={this.onSearchStateChange}
          searchState={this.state.searchState}
        >
          <ConnectedMenu attribute="name" />
          <Stats
            searchState={this.state.searchState}
            onSearchStateChange={this.onSearchStateChange}
          />
          <VirtualSearchBox />
          <VirtualRefinementList attribute="name" />
        </InstantSearch>
      </View>
    );
  }
}

Filters.propTypes = {
  searchState: PropTypes.object.isRequired,
  onSearchStateChange: PropTypes.func.isRequired,
};

export default Filters;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.saveQuery = this.saveQuery.bind(this);
    this.state = {
      query: "",
    };
  }

  saveQuery(text) {
    this.setState({ query: text });
  }

  render() {
    const { items, searchForItems } = this.props;
    const facets = this ? (
      <FlatList
        data={items}
        keyExtractor={(item) => item.name}
        renderItem={this._renderRow}
      />
    ) : null;

    return (
      <View style={styles.searchBoxContainer}>
        <View style={{ flexDirection: "row" }}>
          <Spinner />
          <TextInput
            style={styles.searchBox}
            onChangeText={(text) => {
              this.saveQuery(text);
              searchForItems(text);
            }}
            placeholder={"Search a category..."}
            placeholderTextColor="#666"
            value={this.state.query}
            clearButtonMode={"always"}
            underlineColorAndroid={"white"}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize={"none"}
          />
        </View>
        {facets}
      </View>
    );
  }

  _renderRow = ({ item: refinement }) => {
    const icon = refinement.isRefined ? (
      <Icon name="circle" color="#e29b0b" />
    ) : (
      <Icon name="circle-thin" color="#000" />
    );

    const label = this.props.isFromSearch ? (
      <Highlight
        attribute="name"
        hit={refinement}
        highlightProperty="_highlightResult"
      />
    ) : (
      refinement.name
    );

    return (
      <TouchableHighlight
        onPress={() => {
          this.saveQuery("");
          this.props.refine(refinement.value);
          Keyboard.dismiss();
        }}
      >
        <View style={styles.item}>
          <Text style={refinement.isRefined ? styles.itemRefined : {}}>
            {label}
          </Text>
          {icon}
        </View>
      </TouchableHighlight>
    );
  };

  _renderSeparator = (sectionID, rowID, adjacentRowHighlighted) => (
    <View
      key={`${sectionID}-${rowID}`}
      style={{
        height: adjacentRowHighlighted ? 4 : 1,
        backgroundColor: adjacentRowHighlighted ? "#3B5998" : "#CCCCCC",
      }}
    />
  );
}

Menu.propTypes = {
  query: PropTypes.string,
  saveQuery: PropTypes.func,
  searchForItems: PropTypes.func,
  refine: PropTypes.func,
  items: PropTypes.array,
  isFromSearch: PropTypes.bool,
};

const ConnectedMenu = connectMenu(Menu);
const VirtualSearchBox = connectSearchBox(() => null);
const VirtualRefinementList = connectRefinementList(() => null);
const VirtualRange = connectRange(() => null);
