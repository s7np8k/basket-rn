import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from "react-native-table-component";
import Teams from "../Teams"

export default class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', '', 'Q1', 'Q2', 'Q3', 'Q4'],
      tableData: [
        ['xx', '88', '12', '33', '14', '2'],
        ['xx2', '112', '10', '16', '4', '7'],
      ]
    }
  }

  render() {
    const { tableHead, tableData } = this.state;
    const { team1 } = this.props
    const teamLogo = (teamId) => (
      <Image source={Teams[teamId].logo_small} style={{ width: 50, height: 50 }} />
    );
    return (
      <View style={{ flex: 1, height: 200 }} >
        <View style={{ flex: 1, alignItems: 'center', padding: 25 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>2017-02-02</Text>
        </View>
        <Table borderStyle={{ borderColor: 'transparent' }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          {
            tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 0 ? teamLogo(team1) : cellData} textStyle={styles.text} />
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: 'transparent' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: 'transparent' },
  btn: { width: 58, height: 18, backgroundColor: 'transparent', borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});