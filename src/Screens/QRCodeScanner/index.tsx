import React, { useRef } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenName from '../../Routes/ScreenName';
import { RootStackParamList } from '../../Routes';

type QRCodeScannerProps = {
    navigation: StackNavigationProp<RootStackParamList, ScreenName.Scanner>;
};

const QRCodeScannerComponent: React.FC<QRCodeScannerProps> = ({ navigation }) => {
    const scannerRef = useRef<QRCodeScanner | null>(null);

    const handleQRCodeScanned = ({ data }: any) => {
        if (isValidQRCode(data)) {
            navigation.navigate(ScreenName.Result, { number: data });
        } else {
            Alert.alert(
                'Invalid QR code',
                'Please scan a valid 6-digit number.',
                [
                    {
                        text: 'OK', onPress: () => {
                            console.log('OK Pressed')
                            if (scannerRef.current) {
                                scannerRef.current.reactivate();
                            }
                        }
                    }
                ],
                { cancelable: false }
            )
        }

        if (scannerRef.current) {
            scannerRef.current.reactivate();
        }
    };

    const isValidQRCode = (data: string) => {
        return /^\d{6}$/.test(data);
    };

    return (
        <QRCodeScanner
            ref={(node) => (scannerRef.current = node)}
            onRead={handleQRCodeScanned}
            showMarker
            topContent={<Text style={styles.centerText}>Scan a QR code to get a 6-digit number</Text>}
            bottomContent={
                <TouchableOpacity style={styles.buttonTouchable} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            }
        />
    );
};

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
        textAlign: 'center',
    },
    buttonTouchable: {
        padding: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#888',
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});

export default QRCodeScannerComponent;
