import PhotoFigure from '@/components/PhotoFigure';
import VideoFigure from '@/components/VideoFigure';

const Week07 = () => {
  return (
    <main className="mx-auto w-full max-w-4xl p-4">
      <h3 className="text-2xl font-bold">Week 07: Midterm Project — Crying Statue</h3>

      <VideoFigure className="mt-8 w-3/5 md:w-3/5" src="/pcom/week_07/crying_angel.MOV" caption="Crying angel" />

      <p className="mt-8">
        Imagine standing in front of this almost destroyed angel, with a pitch-black body, a white mask, and eyes you
        can barely see. It&apos;s sitting on a pedestal, and there&apos;s a heart visible inside its chest, but nothing
        is moving yet. The idea is that humanity has captured this angel and turned it into a machine, and now you and
        another person have to activate it. One of you is the donor, and the other is the operator. When you start, this
        calm voice welcomes you to the facility and explains what you have to do, as if everything happening here is
        completely normal. The donor connects, and suddenly the angel&apos;s heart starts beating at the exact same time
        as theirs. So you&apos;re looking at this creepy thing and realizing that it&apos;s borrowing your heartbeat.
        Meanwhile, the operator has to complete memory challenges, watching lights flash and repeating the sequence. But
        here&apos;s the fun part: the faster the donor&apos;s heart beats, the faster the game gets. So the operator is
        trying to concentrate, the donor is trying to stay calm, and both know that making a mistake will cause
        something to happen. With each error, the angel becomes more disturbing: you hear something from inside it, its
        eyes light up, it might tremble, or you suddenly hear its voice underneath the facility announcements.
        You&apos;re waiting for the next scare, which can make your heart beat faster, which makes the game even harder
        for your teammate. After three mistakes, you get this intense failure scene and have to start again. We want it
        to feel like a difficult challenge that people want to beat, but also leave them wondering what they&apos;re
        actually doing to this creature. Are we helping it come back to life, or are we the ones keeping it trapped?
      </p>

      <h3 className="mt-12 mb-4 text-2xl font-bold">1. How the Entire System Works</h3>

      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_07/crying_angel.png"
        alt="Crying angel"
        caption="Crying angel"
      />

      <p className="mt-8">
        Unity acts as the central controller of the installation. It manages the memory game, simulated heartbeat,
        audio, narrative, timing, and different stages of the experience. An Arduino connects the physical controls and
        the angel&apos;s physical effects to Unity through USB serial communication.
      </p>

      <p className="mt-8">
        The Arduino reads the donor contact button and the hidden voice button, then controls the angel&apos;s eye LEDs.
        Unity sends commands back to the Arduino when physical effects need to be triggered. A wired USB game controller
        provides four inputs for the operator&apos;s memory game.
      </p>

      <p className="mt-8">
        The installation uses two visual displays. A small HDMI monitor inside the angel&apos;s chest shows the animated
        heart and fictional beats per minute (BPM), while the operator&apos;s display shows the memory sequence,
        instructions, progress, and errors. Powered speakers connected to the laptop play announcements, the
        angel&apos;s voice, heartbeat sounds, and other sound effects.
      </p>

      <h3 className="mt-12 mb-4 text-2xl font-bold">2. Main Components</h3>

      <ul className="mt-8 list-disc space-y-3 pl-6">
        <li>
          <strong>Unity on a laptop:</strong> Runs the game, narrative, timing, audio, and endings.
        </li>
        <li>
          <strong>Arduino Uno:</strong> Connects the physical controls and effects to the Unity application through USB.
        </li>
        <li>
          <strong>Donor contact button:</strong> A momentary button hidden beneath a finger pad detects whether the
          donor maintains contact.
        </li>
        <li>
          <strong>Operator controller:</strong> A wired USB game controller provides four inputs for the memory game.
        </li>
        <li>
          <strong>Chest display:</strong> A small HDMI monitor displays the animated heart and fictional BPM.
        </li>
        <li>
          <strong>Operator display:</strong> Shows the memory sequences, instructions, progress, and errors. This can be
          the laptop screen or a separate monitor.
        </li>
        <li>
          <strong>Powered speakers:</strong> Play facility announcements, angel voices, heartbeat sounds, and sound
          effects.
        </li>
        <li>
          <strong>Eye LEDs:</strong> Two LEDs controlled by Arduino illuminate the angel&apos;s eyes during
          disturbances.
        </li>
        <li>
          <strong>Hidden voice button:</strong> Allows the team to trigger the angel&apos;s voice manually during the
          experience.
        </li>
        <li>
          <strong>Optional moving jaw:</strong> A lightweight hinged jaw and servo can open the angel&apos;s mouth while
          the hidden voice button is held.
        </li>
      </ul>

      <h3 className="mt-12 mb-4 text-2xl font-bold">3. Connecting Arduino and Unity</h3>

      <p className="mt-8">
        Arduino and Unity communicate through USB serial messages. The Arduino reports physical events such as “donor
        connected,” “donor released,” and “voice button held.” A script in Unity reads these messages and responds
        accordingly. Unity can also send commands to Arduino, such as turning the eye LEDs on or off.
      </p>

      <p className="mt-8">
        We will implement and test this communication early in development. Connecting the USB cable alone does not
        establish the interaction: both the Arduino program and the Unity application need instructions for sending,
        receiving, and interpreting messages.
      </p>

      <h3 className="mt-12 mb-4 text-2xl font-bold">4. The Automated Experience</h3>

      <p className="mt-8">
        The experience is divided into stages rather than playing as one continuous video. Pressing Start begins the
        awakening sound and welcome announcement. Unity then waits for the donor to place their finger on the contact
        pad. Once contact is detected, the heart appears, the introduction finishes, and the operator&apos;s challenge
        begins.
      </p>

      <p className="mt-8">
        Between rounds, Unity can pause the game for an announcement or a disturbing interruption. The game resumes only
        when the interruption has finished. This allows the installation to wait, react to participants, pause, and
        resume based on their actions.
      </p>

      <PhotoFigure className="mt-8 w-3/5 md:w-3/5" src="/pcom/week_07/drilling.png" alt="drilling" caption="drilling" />

      <h3 className="mt-12 mb-4 text-2xl font-bold">5. The Simulated Heartbeat</h3>

      <p className="mt-8">
        The donor&apos;s fictional heartbeat is generated inside Unity. It begins at approximately 75 BPM, fluctuates
        slightly, and gradually increases as the experience continues. Mistakes can cause an additional increase. This
        BPM value controls both the chest animation and the difficulty of the operator&apos;s challenge.
      </p>

      <p className="mt-8">
        At the beginning, the operator sees a relatively slow sequence of three symbols. As the BPM rises, sequences
        become longer and play faster. We will define minimum and maximum speeds to keep the difficulty within an
        intentional range.
      </p>

      <p className="mt-8">
        Removing the donor&apos;s finger pauses the challenge. When contact is restored, the current round plays again.
        The installation generates a fictional heartbeat for the experience and does not measure the donor&apos;s actual
        heart rate.
      </p>

      <h3 className="mt-12 mb-4 text-2xl font-bold">6. The Memory Game</h3>

      <p className="mt-8">
        The operator uses four controller buttons corresponding to four matching symbols. Unity displays a sequence and
        then waits for the operator to repeat it. A correct sequence advances the game, while an incorrect input or a
        timeout adds an error.
      </p>

      <p className="mt-8">
        During a scare or interruption, the answer inputs and timer pause. This prevents one mistake from accidentally
        being counted as several. Each error triggers a progressively more disturbing response:
      </p>

      <ul className="mt-8 list-disc space-y-3 pl-6">
        <li>
          <strong>First error:</strong> The eyes briefly illuminate and a mechanical sound plays.
        </li>
        <li>
          <strong>Second error:</strong> The heart image distorts and the atmosphere becomes more intense.
        </li>
        <li>
          <strong>Third error:</strong> The final failure sequence begins.
        </li>
        <li>
          <strong>Successful completion:</strong> Completing every round triggers a separate success ending.
        </li>
      </ul>

      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_07/wires_behind.png"
        alt="wires_behind"
        caption="wires_behind"
      />

      <h3 className="mt-12 mb-4 text-2xl font-bold">7. The Chest Animation and Displays</h3>

      <p className="mt-8">
        We can model the heart in Blender and import it into Unity, where a contraction animation is triggered at each
        generated heartbeat interval. Alternatively, we can use pre-rendered animation frames.
      </p>

      <p className="mt-8">
        The chest display will sit behind an opening in the torso, with its edges hidden so that it feels integrated
        into the angel&apos;s body. Unity will render the animated heart on this monitor while showing the memory game
        on the operator&apos;s display. We will verify the laptop&apos;s display output and multi-monitor support before
        finalizing the screen arrangement.
      </p>

      <PhotoFigure
        className="mt-8 w-3/5 md:w-3/5"
        src="/pcom/week_07/drill_together.png"
        alt="drill_together"
        caption="drill_together"
      />

      <h3 className="mt-12 mb-4 text-2xl font-bold">8. Sound and Voices</h3>

      <p className="mt-8">
        Audio will be organized into separate layers: background atmosphere, heartbeat, facility announcements, and the
        angel&apos;s voice. Keeping these layers separate allows the background to continue while a character speaks, or
        become quieter so that an interruption is easier to hear.
      </p>

      <p className="mt-8">
        All recordings will be stored locally on the laptop, so the installation will not require an internet
        connection.
      </p>

      <h3 className="mt-12 mb-4 text-2xl font-bold">9. The Hidden Voice Button</h3>

      <p className="mt-8">
        The hidden button gives our team live control over the angel. Pressing it starts a prerecorded phrase, such as
        “Help me.” Releasing the button stops playback immediately, even in the middle of a sentence. Each new press can
        select another phrase.
      </p>

      <p className="mt-8">
        This control does not change the score or advance the story. It allows the team to react to visitors while the
        main experience continues.
      </p>

      <h3 className="mt-12 mb-4 text-2xl font-bold">10. The Optional Moving Jaw</h3>

      <p className="mt-8">
        If we include a moving jaw, holding the hidden button will also tell Arduino to open the mouth. Releasing the
        button stops the voice and closes the jaw.
      </p>

      <p className="mt-8">
        The mechanism will use a lightweight lower jaw, a hinge, and a servo connected through a short linkage. The
        servo will have a suitable motor power supply rather than drawing its operating current from an Arduino signal
        pin. We will test the movement with a lightweight mock-up before building the final mask.
      </p>

      <p className="mt-8">The voice effect will still work if we decide not to include the moving jaw.</p>

      <h3 className="mt-12 mb-4 text-2xl font-bold">11. Physical Construction</h3>

      <p className="mt-8">
        The installation will have three accessible sections: the sculpture containing the chest display and eye lights,
        the console containing the donor contact pad and operator controls, and the pedestal containing the speakers and
        cable management.
      </p>

      <p className="mt-8">
        The electronics will remain accessible through removable panels, allowing us to fix loose connections or
        troubleshoot components without dismantling the entire angel.
      </p>
    </main>
  );
};

export default Week07;
