"use client"

import { useState, useEffect } from "react"
import { SafeAreaView, StyleSheet, View, Text, Image, Animated, Dimensions, Platform } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import RippleButton from "./components/RippleButton"

const { width } = Dimensions.get("window")

interface ConnectionStatus {
  telegram: boolean
  linkedin: boolean
  instagram: boolean
}

const App = () => {
  const [connections, setConnections] = useState<ConnectionStatus>({
    telegram: false,
    linkedin: false,
    instagram: false,
  })

  const logoScale = new Animated.Value(0.5)
  const titleOpacity = new Animated.Value(0)
  const buttonsTranslateY = new Animated.Value(50)
  const buttonsOpacity = new Animated.Value(0)

  useEffect(() => {
    // Animate logo
    Animated.timing(logoScale, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()

    // Animate title
    Animated.timing(titleOpacity, {
      toValue: 1,
      duration: 500,
      delay: 200,
      useNativeDriver: true,
    }).start()

    // Animate buttons
    Animated.parallel([
      Animated.timing(buttonsTranslateY, {
        toValue: 0,
        duration: 500,
        delay: 400,
        useNativeDriver: true,
      }),
      Animated.timing(buttonsOpacity, {
        toValue: 1,
        duration: 500,
        delay: 400,
        useNativeDriver: true,
      }),
    ]).start()
  }, [])

  const canContinue = connections.telegram && (connections.linkedin || connections.instagram)

  const handleConnect = (platform: keyof ConnectionStatus) => {
    setConnections((prev) => ({
      ...prev,
      [platform]: true,
    }))
  }

  const handleContinue = () => {
    if (canContinue) {
      // Navigate to home screen
      console.log("Navigating to home screen")
    }
  }

  return (
    <LinearGradient
      colors={["#4c80f0", "#9c55e0", "#e94c89"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Animated.View style={[styles.logoWrapper, { transform: [{ scale: logoScale }] }]}>
              <Image
                source={{
                  uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pango_nobg-0aLO3E4IsuXBBkSy42NPEOz5wmHBp7.png",
                }}
                style={styles.logo}
                resizeMode="contain"
              />
            </Animated.View>

            <Animated.Text style={[styles.title, { opacity: titleOpacity }]}>Welcome to Pango</Animated.Text>
          </View>

          <Animated.View
            style={[
              styles.buttonContainer,
              {
                transform: [{ translateY: buttonsTranslateY }],
                opacity: buttonsOpacity,
              },
            ]}
          >
            <ConnectButton
              platform="Telegram"
              isConnected={connections.telegram}
              onPress={() => handleConnect("telegram")}
              color="#4c80f0"
              required
            />

            <ConnectButton
              platform="LinkedIn"
              isConnected={connections.linkedin}
              onPress={() => handleConnect("linkedin")}
              color="#f0c14c"
            />

            <ConnectButton
              platform="Instagram"
              isConnected={connections.instagram}
              onPress={() => handleConnect("instagram")}
              color="#f07c4c"
            />

            <RippleButton
              onPress={handleContinue}
              disabled={!canContinue}
              style={[styles.continueButton, !canContinue && styles.disabledButton]}
            >
              <Text style={styles.continueButtonText}>Continue</Text>
            </RippleButton>
          </Animated.View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

interface ConnectButtonProps {
  platform: string
  isConnected: boolean
  onPress: () => void
  color: string
  required?: boolean
}

const ConnectButton = ({ platform, isConnected, onPress, color, required }: ConnectButtonProps) => {
  return (
    <RippleButton
      onPress={onPress}
      disabled={isConnected}
      style={[styles.connectButton, { backgroundColor: color }, isConnected && styles.connectedButton]}
    >
      <View style={styles.connectButtonContent}>
        <Text style={styles.connectButtonText}>
          {isConnected ? `Connected to ${platform}` : `Connect ${platform}`}
          {required && !isConnected ? " (Required)" : ""}
        </Text>
        {isConnected && (
          <View style={styles.checkmark}>
            <Text style={styles.checkmarkText}>✓</Text>
          </View>
        )}
      </View>
    </RippleButton>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  logoWrapper: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    maxWidth: 320,
    marginBottom: 40,
  },
  connectButton: {
    height: 56,
    borderRadius: 12,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  connectButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  connectedButton: {
    opacity: 0.8,
  },
  connectButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  checkmark: {
    marginLeft: 8,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  checkmarkText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  continueButton: {
    height: 56,
    borderRadius: 12,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    marginTop: 8,
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  disabledButton: {
    opacity: 0.5,
  },
  continueButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
})

export default App

