initSidebarItems({"struct":[["SyncArbiter","SyncArbiter provides the resources for a single Sync Actor to run on a dedicated thread or threads. This is generally used for CPU bound concurrent workloads. It’s important to note, that the SyncArbiter generates a single address for the pool of hosted Sync Actors. Any message sent to this Address, will be operated on by a single Sync Actor from the pool."],["SyncContext","Sync actor execution context. This is used instead of impl Actor for your Actor instead of Context, if you intend this actor to run in a SyncArbiter."]]});