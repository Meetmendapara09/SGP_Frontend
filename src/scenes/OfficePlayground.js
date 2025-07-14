import Phaser from "phaser";

const AVATAR_DATA = [
  { name: "Alice", color: 0x3498db },
  { name: "Bob", color: 0xe74c3c },
  { name: "Carol", color: 0x27ae60 },
  { name: "Dave", color: 0xf1c40f }
];

export default class OfficePlayground extends Phaser.Scene {
  constructor(selectedChar = 0, userCount = 4) {
    super("OfficePlayground");
    this.selectedChar = selectedChar;
    this.userCount = userCount;
  }

  preload() {
    this.load.image("office_bg", "https://dummyimage.com/800x600/edf2fb/cddafd&text=Office+Playground");
    // Load up to 4 avatars
    this.load.image("char1", "https://dummyimage.com/48x48/3498db/fff&text=A");
    this.load.image("char2", "https://dummyimage.com/48x48/e74c3c/fff&text=B");
    this.load.image("char3", "https://dummyimage.com/48x48/27ae60/fff&text=C");
    this.load.image("char4", "https://dummyimage.com/48x48/f1c40f/222&text=D");
  }

  create() {
    // Soft background
    this.add.rectangle(400, 300, 800, 600, 0xedf2fb).setDepth(-1);
    let bg;
    try {
      bg = this.add.image(400, 300, "office_bg").setDepth(0);
    } catch (e) {
      bg = this.add.rectangle(400, 300, 800, 600, 0xedf2fb).setDepth(0);
    }
    this.chars = [];
    // Add up to 4 avatars spaced horizontally
    const startX = 200;
    const gap = 150;
    for (let i = 0; i < this.userCount; i++) {
      const sprite = this.physics.add.sprite(startX + i * gap, 300, `char${i+1}`);
      sprite.avatarName = AVATAR_DATA[i].name;
      sprite.avatarColor = AVATAR_DATA[i].color;
      this.chars.push(sprite);
      // Show name below avatar
      sprite.nameText = this.add.text(sprite.x, sprite.y + 32, sprite.avatarName, {
        font: "16px Arial",
        color: "#222",
        backgroundColor: "#f3f4f6",
        padding: { left: 6, right: 6, top: 2, bottom: 2 },
        align: "center"
      }).setOrigin(0.5);
    }
    this.cursors = this.input.keyboard.createCursorKeys();
    // Colliders for all pairs
    for (let i = 0; i < this.chars.length; i++) {
      for (let j = i + 1; j < this.chars.length; j++) {
        this.physics.add.collider(this.chars[i], this.chars[j], () => {
          this.showInteraction(i, j);
        });
      }
    }
    // Enable mouse/click interaction for each avatar
    this.chars.forEach((char, idx) => {
      char.setInteractive();
      char.on('pointerdown', () => {
        this.showChatBubble(char, idx);
      });
      char.on('pointerover', () => {
        char.setTint(0xffffff);
        char.nameText.setStyle({ backgroundColor: "#dbeafe", color: "#2563eb" });
      });
      char.on('pointerout', () => {
        char.clearTint();
        char.nameText.setStyle({ backgroundColor: "#f3f4f6", color: "#222" });
      });
    });
  }

  update() {
    const speed = 3;
    const char = this.chars[this.selectedChar];
    if (this.cursors.left.isDown) char.x -= speed;
    if (this.cursors.right.isDown) char.x += speed;
    if (this.cursors.up.isDown) char.y -= speed;
    if (this.cursors.down.isDown) char.y += speed;
    // Keep name text below avatar
    this.chars.forEach(sprite => {
      sprite.nameText.x = sprite.x;
      sprite.nameText.y = sprite.y + 32;
    });
  }

  showInteraction(i, j) {
    if (!this.interactionText) {
      this.interactionText = this.add.text(400, 550, `${AVATAR_DATA[i].name} meets ${AVATAR_DATA[j].name}!`, {
        font: "24px Arial",
        color: "#222"
      }).setOrigin(0.5);
      this.time.delayedCall(1500, () => {
        this.interactionText.destroy();
        this.interactionText = null;
      });
    }
  }

  showChatBubble(char, idx) {
    if (char.chatBubble) {
      char.chatBubble.destroy();
    }
    const messages = [
      "Hello, I'm Alice!",
      "Hi, I'm Bob!",
      "Hey, I'm Carol!",
      "Yo, I'm Dave!"
    ];
    char.chatBubble = this.add.text(char.x, char.y - 40, messages[idx], {
      font: "18px Arial",
      color: "#222",
      backgroundColor: "#fff",
      padding: { left: 8, right: 8, top: 4, bottom: 4 },
      align: "center"
    }).setOrigin(0.5);
    this.time.delayedCall(1200, () => {
      if (char.chatBubble) {
        char.chatBubble.destroy();
        char.chatBubble = null;
      }
    });
  }
}
