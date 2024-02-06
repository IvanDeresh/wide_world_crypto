abstract class Subscription {
  abstract getPrice(): number;
  abstract getDetails(): string;
}

interface SubscriptionFactory {
  createSubscription(): Subscription;
}

class TrialTimeSubscription extends Subscription {
  getPrice() {
    return 1;
  }
  getDetails() {
    return "Trial Time Subscription";
  }
}
class MediumSubscription extends Subscription {
  getPrice() {
    return 20;
  }
  getDetails() {
    return "Medium Subscription";
  }
}
class PremiumSubscription extends Subscription {
  getPrice() {
    return 30;
  }
  getDetails() {
    return "Premium Subscription";
  }
}
class TrialTimeSubscriptionFactory implements SubscriptionFactory {
  createSubscription(): Subscription {
    return new TrialTimeSubscription();
  }
}
class MediumSubscriptionFactory implements SubscriptionFactory {
  createSubscription(): Subscription {
    return new TrialTimeSubscription();
  }
}
class PremiumSubscriptionFactory implements SubscriptionFactory {
  createSubscription(): Subscription {
    return new PremiumSubscription();
  }
}
export {
  TrialTimeSubscriptionFactory,
  MediumSubscriptionFactory,
  PremiumSubscriptionFactory,
  Subscription,
};
export type { SubscriptionFactory };
