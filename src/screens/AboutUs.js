import React, { Component } from "react";
import { StyleSheet, Text, View ,ImageBackground ,Image ,ScrollView ,TouchableOpacity ,Linking} from "react-native";
import {
  Container,
  Body,
  Content,
  Header,
  Left,
  Button,
  Title,
  Icon,
} from "native-base";
import ExternalLink from './ExternalLink';

function AboutUs(props) {
  
  return (
    <Container>
      <Header style={{backgroundColor:"#27a5ef"}}>
        <Left>
          <Button transparent onPress={() => props.navigation.openDrawer()}>
            <Icon name="menu"></Icon>
          </Button>
        </Left>
        <Body style={{alignContent:"center"}}>
          <Text style={{color:"#FFFFFF",fontWeight:"bold",fontSize:26}}>About Us</Text>
        </Body>
      </Header>
      <ImageBackground source={require("./bg.jpg")} style={styles.image}>
      <Body style={{ alignSelf: "center", paddingTop: "40%" }}>
        <Text style={styles.title}>We have created a sample About Us template designed to work well for virtually any online store, blog, or website. Just fill in the brackets with your company's information and you'll have a professional About Us page written in minutes. If you want to put a personal touch on your page (which we highly recommend), check out the About Us examples below the template.</Text>
      </Body>
      <ScrollView>
      <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image style={{height:100, width: 100}} source={require('../man.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:"white",fontSize:20,marginLeft:10,textAlign:"center"}}>Shresth Raj</Text>
            <Text style={styles.para}> App Developer</Text>
            <View style={{flexDirection: 'row'}}>
            <ExternalLink link='https://www.linkedin.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../linkedin.png')} />
            </ExternalLink>
            <ExternalLink link='https://github.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../github.png')} />
            </ExternalLink>
            <ExternalLink link='https://gmail.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../email.png')} />
            </ExternalLink>
            </View>
          </View>
      </View>
      <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image style={{height:100, width: 100}} source={require('../man.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:"white",fontSize:20,marginLeft:10,textAlign:"center"}}>Shresth Raj</Text>
            <Text style={styles.para}> App Developer</Text>
            <View style={{flexDirection: 'row'}}>
            <ExternalLink link='https://www.linkedin.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../linkedin.png')} />
            </ExternalLink>
            <ExternalLink link='https://github.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../github.png')} />
            </ExternalLink>
            <ExternalLink link='https://gmail.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../email.png')} />
            </ExternalLink>
            </View>
          </View>
      </View>
      <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image style={{height:100, width: 100}} source={require('../man.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:"white",fontSize:20,marginLeft:10,textAlign:"center"}}>Shresth Raj</Text>
            <Text style={styles.para}> App Developer</Text>
            <View style={{flexDirection: 'row'}}>
            <ExternalLink link='https://www.linkedin.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../linkedin.png')} />
            </ExternalLink>
            <ExternalLink link='https://github.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../github.png')} />
            </ExternalLink>
            <ExternalLink link='https://gmail.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../email.png')} />
            </ExternalLink>
            </View>
          </View>
      </View>
      <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image style={{height:100, width: 100}} source={require('../man.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:"white",fontSize:20,marginLeft:10,textAlign:"center"}}>Shresth Raj</Text>
            <Text style={styles.para}> App Developer</Text>
            <View style={{flexDirection: 'row'}}>
            <ExternalLink link='https://www.linkedin.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../linkedin.png')} />
            </ExternalLink>
            <ExternalLink link='https://github.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../github.png')} />
            </ExternalLink>
            <ExternalLink link='https://gmail.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../email.png')} />
            </ExternalLink>
            </View>
          </View>
      </View>
      <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image style={{height:100, width: 100}} source={require('../man.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:"white",fontSize:20,marginLeft:10,textAlign:"center"}}>Shresth Raj</Text>
            <Text style={styles.para}> App Developer</Text>
            <View style={{flexDirection: 'row'}}>
            <ExternalLink link='https://www.linkedin.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../linkedin.png')} />
            </ExternalLink>
            <ExternalLink link='https://github.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../github.png')} />
            </ExternalLink>
            <ExternalLink link='https://gmail.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../email.png')} />
            </ExternalLink>
            </View>
          </View>
      </View>
      <View style={styles.leftContainer}>
          <View style={styles.imageContainer}>
            <Image style={{height:100, width: 100}} source={require('../man.png')} />
          </View>
          <View style={styles.textContainer}>
            <Text style={{color:"white",fontSize:20,marginLeft:10,textAlign:"center"}}>Shresth Raj</Text>
            <Text style={styles.para}> App Developer</Text>
            <View style={{flexDirection: 'row'}}>
            <ExternalLink link='https://www.linkedin.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../linkedin.png')} />
            </ExternalLink>
            <ExternalLink link='https://github.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../github.png')} />
            </ExternalLink>
            <ExternalLink link='https://gmail.com/'>
            <Image style={{height:30, width: 30, margin: 5}} source={require('../email.png')} />
            </ExternalLink>
            </View>
          </View>
      </View>
      </ScrollView>
      </ImageBackground>

    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  title: {
    flex: 1,
    color: 'white',
    marginLeft : 10,
    marginRight : 10,
    marginTop: -130,
    textAlign: 'justify',
  },
  para:{
          fontWeight:"bold",
          borderRadius:15,
          justifyContent:"center",
          alignItems:"center",
          color: "white",
          padding:5,
          margin:5      
  },
  leftContainer:{
          flex: 1,
          margin: 10,
          width: "95%",
          height:"100%",
          backgroundColor: "#27a5ef",
          flexDirection: "row",
          paddingTop:10,
          paddingBottom:10,
          paddingLeft:10,
          paddingRight:5,
          borderRadius:10
          },
  imageContainer: {
            width:"25%",
            height: "100%",
            justifyContent: "center",
            alignItems:"center",
            padding:10,
            borderRadius:90                      
          },
  textContainer: {
            width: "70%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          }

});
export default AboutUs;
