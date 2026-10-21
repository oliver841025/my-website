import PhotoFigure from '@/components/PhotoFigure';
import VideoFigure from '@/components/VideoFigure';

const Week06 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      <h3 className="text-2xl font-bold">Week 06: Midterm Project — Crying Statue Documentation</h3>

      <VideoFigure className="mt-4 w-3/5 md:w-3/5" src="/pcom/week_06/big success.MOV" caption="success!" />

      <h3 className="text-2xl font-bold mt-12 mb-4">1. How the Entire System Works</h3>
      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_06/whole.webp"
        alt="Crying statue whole circuit phase 1"
        caption="Crying statue whole circuit phase 1"
      />
      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_06/circuit graphic.webp"
        alt="Circuit diagram for the crying statue"
        caption="Circuit diagram for the crying statue"
      />

      <p className="mt-4">
        The goal of this project is to use an ultrasonic sensor to detect how close a person is to the statue, then
        control a mini water pump through a relay. The system works as a continuous process:
      </p>
      <div className="mt-4 rounded-lg bg-gray-100 p-4 text-gray-900">
        <p className="font-semibold">HC-SR04 Sensor → Arduino → Relay → Water Pump</p>
        <p className="mt-2 text-sm">
          Measure distance → Calculate distance → Switch the relay → Turn the pump on or off
        </p>
      </div>

      <p className="mt-4">There are two different types of flow in this system:</p>

      <ul className="list-disc pl-6 mt-3 space-y-2">
        <li>
          <strong>Signal flow:</strong> Electrical signals travel between the sensor, Arduino, and relay control input.
          These signals tell the system what to do.
        </li>
        <li>
          <strong>Current flow:</strong> Electrical current flows from the power supply through the relay contacts and
          the pump. This provides the energy needed to run the pump.
        </li>
      </ul>

      <p className="mt-4">
        The relay acts as an electrically controlled switch. The Arduino sends a small control signal to the relay, and
        the relay switches the pump&apos;s power circuit on or off.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4">2. Understanding the HC-SR04 Ultrasonic Sensor</h3>
      <PhotoFigure className="mt-8 w-3/5 md:w-3/5" src="/pcom/week_06/sensor.webp" alt="sensor" caption="sensor" />
      <PhotoFigure className="mt-8 w-3/5 md:w-3/5" src="/pcom/week_06/sensor spec.png" alt="sensor spec" />

      <p className="mt-4">
        The HC-SR04 measures distance by sending out ultrasonic sound waves and measuring how long they take to travel
        to an object and bounce back.
      </p>

      <h4 className="text-xl font-semibold mt-6 mb-3">What do VCC, GND, TRIG, and ECHO do?</h4>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>VCC:</strong> Supplies power to the sensor. In this setup, it is connected to the Arduino&apos;s 5V supply.
        </li>
        <li>
          <strong>GND:</strong> Connects to ground and provides the electrical reference for the circuit.
        </li>
        <li>
          <strong>TRIG (D2):</strong> The Arduino sends a short HIGH pulse to trigger a measurement. In this project,
          the trigger pulse lasts for 10 microseconds.
        </li>
        <li>
          <strong>ECHO (D3):</strong> The sensor outputs a HIGH pulse whose duration represents the round-trip travel
          time of the ultrasonic sound wave.
        </li>
      </ul>

      <h4 className="text-xl font-semibold mt-6 mb-3">How does the sensor measure distance?</h4>

      <ol className="list-decimal pl-6 space-y-3">
        <li>The Arduino sends a trigger pulse through TRIG.</li>
        <li>The sensor emits ultrasonic sound waves toward the object.</li>
        <li>The sound waves bounce off the object and return to the sensor.</li>
        <li>The ECHO pin stays HIGH for a duration related to the sound&apos;s round-trip travel time.</li>
        <li>The Arduino measures this duration and calculates the distance.</li>
      </ol>

      <p className="mt-4">
        Since sound travels to the object and back, the measured distance is half of the total travel distance.
      </p>

      <div className="mt-4 rounded-lg bg-gray-100 p-4 text-gray-900">
        <p className="font-semibold">Distance formula</p>
        <p className="mt-2 font-mono text-sm">Distance = Duration &times; 0.0343 ÷ 2</p>
        <p className="mt-2 text-sm">
          The speed of sound is approximately 0.0343 cm per microsecond. The division by 2 accounts for the round trip.
        </p>
      </div>

      <h4 className="text-xl font-semibold mt-6 mb-3">What are HIGH and LOW?</h4>

      <p className="mt-4">
        In digital electronics, HIGH and LOW represent two logic states. With the Arduino Uno R3 used in this project,
        HIGH is approximately 5V and LOW is approximately 0V.
      </p>

      <ul className="list-disc pl-6 mt-3 space-y-2">
        <li>
          <strong>HIGH:</strong> A digital signal representing the HIGH logic state.
        </li>
        <li>
          <strong>LOW:</strong> A digital signal representing the LOW logic state.
        </li>
      </ul>

      <p className="mt-4">
        These are signal levels, not descriptions of how much current is flowing. For example, the ECHO pin&apos;s HIGH
        duration carries timing information that the Arduino can use to calculate distance.
      </p>

      <h4 className="text-xl font-bold mt-12 mb-4">Here is the entire code</h4>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm text-gray-900">
        <code>{`
const int trigPin = 2;
const int echoPin = 3;
const int relayPin = 4;

const float triggerDistance = 10.0; // measure the distance 10cm

// High-level triggered relay
const int RELAY_ON = HIGH;
const int RELAY_OFF = LOW;

void setup() {
  Serial.begin(9600);

  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(relayPin, OUTPUT);

  // Make sure the pump is off at startup
  digitalWrite(relayPin, RELAY_OFF);

  digitalWrite(trigPin, LOW);
  delay(100);
}

void loop() {
  // send signal
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // read ECHO pulse time, wait for maxium 30 ms
  unsigned long duration = pulseIn(echoPin, HIGH, 30000UL);

  if (duration == 0) {
    // no echo, close the pump
    digitalWrite(relayPin, RELAY_OFF);
    Serial.println("No echo - Pump OFF");
  } else {
    // measure distance, unit - cm
    float distance = duration * 0.0343 / 2.0;

    Serial.print("Distance: ");
    Serial.print(distance);
    Serial.println(" cm");

    if (distance < triggerDistance) {
      digitalWrite(relayPin, RELAY_ON);
      Serial.println("Pump ON");
    } else {
      digitalWrite(relayPin, RELAY_OFF);
      Serial.println("Pump OFF");
    }
  }

  delay(100);
}`}</code>
      </pre>

      <h3 className="text-2xl font-bold mt-12 mb-4">3. Understanding Pulses and pulseIn()</h3>

      <p className="mt-4">
        A pulse is a temporary change in a signal&apos;s logic level. In this project, the Arduino sends a short trigger
        pulse, while the sensor returns an echo pulse whose duration is used to measure distance.
      </p>

      <p className="mt-4">The following code sends a trigger pulse:</p>

      <pre className="mt-3 overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm text-gray-900">
        <code>{`digitalWrite(trigPin, LOW);
delayMicroseconds(2);
digitalWrite(trigPin, HIGH);
delayMicroseconds(10);
digitalWrite(trigPin, LOW);`}</code>
      </pre>

      <ul className="list-disc pl-6 mt-4 space-y-2">
        <li>
          <strong>digitalWrite():</strong> Sets a digital pin to HIGH or LOW.
        </li>
        <li>
          <strong>delayMicroseconds(10):</strong> Keeps the trigger signal HIGH for 10 microseconds.
        </li>
        <li>
          <strong>pulseIn(echoPin, HIGH, 30000UL):</strong> Measures how long the ECHO pin remains HIGH, in
          microseconds.
        </li>
      </ul>

      <p className="mt-4">
        The third argument, <code>30000UL</code>, sets a timeout of 30,000 microseconds, or 30 milliseconds. The U means
        unsigned, and L means long. Together, UL makes the number an unsigned long integer literal, which is suitable
        for this timing value.
      </p>

      <p className="mt-4">
        The return value is stored in an <code>unsigned long</code> variable because the duration is a non-negative
        integer. If no valid HIGH pulse is detected before the timeout, <code>pulseIn()</code> returns 0.
      </p>

      <pre className="mt-3 overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm text-gray-900">
        <code>{`unsigned long duration = pulseIn(echoPin, HIGH, 30000UL);

if (duration == 0) {
  // No echo was received within the timeout.
} else {
  float distance = duration * 0.0343 / 2.0;
}`}</code>
      </pre>

      <h3 className="text-2xl font-bold mt-12 mb-4">4. Understanding the Relay</h3>

      <p className="mt-4">
        A relay is an electrically controlled switch. It allows a low-power control signal to switch a separate
        electrical load circuit. In my project, the Arduino controls the relay, and the relay switches power to the mini
        pump.
      </p>

      <h4 className="text-xl font-semibold mt-6 mb-3">Relay module control pins</h4>

      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_06/relay spec 1.png"
        alt="relay spec"
        caption="relay spec"
      />
      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_06/relay spec 2.png"
        alt="relay spec"
        caption="relay spec"
      />
      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_06/relay spec 3.png"
        alt="relay spec"
        caption="relay spec"
      />
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>DC+:</strong> Supplies power to the relay module.
        </li>
        <li>
          <strong>DC&minus;:</strong> Ground connection for the module&apos;s control circuit.
        </li>
        <li>
          <strong>IN1:</strong> Receives the control signal from Arduino D4 to switch the first relay channel.
        </li>
      </ul>

      <p className="mt-4">
        The relay module&apos;s trigger mode determines whether a HIGH or LOW signal activates the relay. My current setup
        uses the COM&minus;High jumper configuration, so the code is written for HIGH-level activation. The actual
        behavior should always be verified against the module&apos;s labeling and documentation.
      </p>

      <h4 className="text-xl font-semibold mt-6 mb-3">What are COM, NO, and NC?</h4>

      <ul className="list-disc pl-6 space-y-3">
        <li>
          <strong>COM (Common):</strong> The common contact of the relay switch.
        </li>
        <li>
          <strong>NO (Normally Open):</strong> The circuit between COM and NO is open when the relay is inactive. It
          closes when the relay activates.
        </li>
        <li>
          <strong>NC (Normally Closed):</strong> The circuit between COM and NC is closed when the relay is inactive. It
          opens when the relay activates.
        </li>
      </ul>

      <p className="mt-4">
        I use COM and NO so that the pump is normally off. When the relay activates, the contacts close and allow
        current to flow through the pump circuit.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4">5. Connecting the Sensor to the Pump</h3>

      <p className="mt-4">
        The Arduino reads the distance from the HC-SR04 and compares it with a threshold of 10 cm. If an object is
        closer than 10 cm, the Arduino activates the relay. Otherwise, it turns the relay off.
      </p>

      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_06/pump spec.png"
        alt="pump spec"
        caption="pump spec"
      />

      <pre className="mt-3 overflow-x-auto rounded-lg bg-gray-100 p-4 text-sm text-gray-900">
        <code>{`const float triggerDistance = 10.0;

if (distance < triggerDistance) {
  digitalWrite(relayPin, HIGH);
  Serial.println("Pump ON");
} else {
  digitalWrite(relayPin, LOW);
  Serial.println("Pump OFF");
}`}</code>
      </pre>

      <p className="mt-4">
        This is proximity detection rather than gesture recognition. The pump turns on whenever the measured distance is
        below the threshold. To recognize a gesture, I would need to analyze a sequence of distance measurements over
        time, such as moving a hand toward the sensor and then moving it away.
      </p>

      <h4 className="text-xl font-semibold mt-6 mb-3">Understanding the pump&apos;s power requirements</h4>

      <p className="mt-4">My mini pump is rated at DC 5V and 1.2W. Its estimated rated current is:</p>

      <div className="mt-3 rounded-lg bg-gray-100 p-4 text-gray-900">
        <p className="font-mono text-sm">Current = Power ÷ Voltage</p>
        <p className="mt-2 font-mono text-sm">1.2W ÷ 5V = 0.24A</p>
        <p className="mt-2 text-sm">
          This equals approximately 240 mA at its rated operating point. The startup current may be higher.
        </p>
      </div>

      <p className="mt-4">
        The relay switches the pump&apos;s power circuit, but it does not provide power by itself. The pump needs a suitable
        5V supply capable of providing enough current. An external 5V supply is preferable to powering the pump directly
        from the Arduino&apos;s USB 5V rail.
      </p>

      <p className="mt-4">
        When using an external supply, its positive terminal should feed the pump through the relay contacts, and its
        negative terminal should connect to the pump&apos;s negative terminal. The Arduino and relay module&apos;s control circuit
        must also be powered and grounded correctly according to the relay module&apos;s specifications.
      </p>

      <h3 className="text-2xl font-bold mt-12 mb-4">6. Why I Switched to Arduino Uno R3</h3>
      <PhotoFigure className="mt-8 w-3/5 md:w-3/5" src="/pcom/week_06/uno R3.webp" alt="uno R3" caption="uno R3" />
      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_06/uno R3 spec.png"
        alt="uno R3 spec"
        caption="uno R3 spec"
      />
      <p className="mt-4">
        The Uno R3 also uses 5V logic, which is compatible with the HC-SR04 ultrasonic sensor&apos;s 5V Echo signal.
        Switching boards made it easier to troubleshoot the circuit and focus on understanding how the whole system
        works.
      </p>
    </main>
  );
};

export default Week06;
