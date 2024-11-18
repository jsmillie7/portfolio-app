export const rmsSnippet = `   def rms(self):
        """sample the audio for 1s and return the rms value of it"""
        delay = int(1e6 // self.size) - self.delay_offset
        start = utime.ticks_ms()

        for _ in range(self.size):
            self.history.append(adc.read_u16())
            utime.sleep_us(delay)`

export const calcRmsSnippet = `    def calc_rms(self):
        """Calculate the RMS of the history deque"""
        total_square = sum((x - 32768) ** 2 for x in self.history)
        rms = math.sqrt(total_square / self.size)
        return rms`

export const runForeverSnippet = `        while True:
            x = self.rms() - self.rms_offset
            if x > self.threshold and not self.water_running:
                led.on()
                print("[ON]", x)
                self.water_running = True
                self.send("started")
            elif x < self.threshold * 0.5 and self.water_running:
                led.off()
                print("[OFF]", x)
                self.water_running = False
                self.send("finished")
            else:
                print(x)`


export const postSnippet = `    def post_data(self, data):
        """Send json data to the endpoint url from data.json

        Args:
            data (dict): json payload for the post request
        """
        json_data = json.dumps(data)
        try:
            response = urequests.post(
                self.url, 
                data=json_data, 
                headers={"Content-Type": "application/json"}
            )
            print("Response:", response.text)
            print("Return Code:", response.status_code)
            if response.status_code != 200:
                self.blink_forever(5)
            response.close()
        except Exception as e:
            print("Failed to send POST request:", e)`